# api/blueprints/hello_world.py

from flask_restx import Namespace, Resource, fields
from pymongo import MongoClient
from config.mongo_setup import get_mongo_client

namespace = Namespace('hello_world', 'Hello World related endpoints')

hello_world_model = namespace.model('HelloWorld', {
    'message': fields.String(
        readonly=True,
        description='Hello world message'
    )
})

hello_world_example = {'message': 'Hello World!'}

@namespace.route('')
class HelloWorld(Resource):

    @namespace.marshal_list_with(hello_world_model)
    @namespace.response(500, 'Internal Server error')
    def get(self):
        '''Hello world message endpoint'''

        # Access the 'hello_world_collection' in your MongoDB
        db = get_mongo_client()['your_database_name']
        hello_world_collection = db['testing']  # Use 'testing' as the collection name

        # Retrieve data from MongoDB
        result = hello_world_collection.find_one({})

        # Check if result is None or the document has no fields
        if not result or not isinstance(result, dict):
            return hello_world_example

        # Attempt to access the 'message' field, if present
        message_value = result.get('message', None)

        # If 'message' field is present, return it. Otherwise, return the example message
        if message_value is not None:
            return {'message': message_value}
        else:
            return hello_world_example

    @namespace.expect(hello_world_model)  # Specify expected input model
    @namespace.response(201, 'Hello World message stored successfully')
    def post(self):
        '''Store a Hello World message'''

        # Access the 'hello_world_collection' in your MongoDB
        db = get_mongo_client()['your_database_name']
        hello_world_collection = db['testing']  # Use 'testing' as the collection name

        # Get the 'message' from the request payload
        message = namespace.payload.get('message', None)

        if message is not None:
            # Store the message in MongoDB
            hello_world_collection.update_one({}, {'$set': {'message': message}}, upsert=True)

            return {'message': message}, 201
        else:
            return {'message': 'Invalid input'}, 400
