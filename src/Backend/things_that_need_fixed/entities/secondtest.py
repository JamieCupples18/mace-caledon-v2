# api/blueprints/testblueprint.py

from flask import current_app as app
from flask_restx import Namespace, Resource, fields, reqparse
from pymongo.errors import PyMongoError
from werkzeug.security import generate_password_hash
from config.mongo_setup import get_mongo_client
import logging

namespace = Namespace('test', 'Test related endpoints')

signup_model = namespace.model('Signup', {
    'username': fields.String(
        required=True,
        description='Username'
    ),
    'email': fields.String(
        required=True,
        description='Email'
    ),
    'password': fields.String(
        required=True,
        description='Password'
    ),
    'role': fields.String(
        required=True,
        description='Role'
    )
})

signup_parser = reqparse.RequestParser()
signup_parser.add_argument('username', type=str, required=True, help='Username is required')
signup_parser.add_argument('email', type=str, required=True, help='Email is required')
signup_parser.add_argument('password', type=str, required=True, help='Password is required')
signup_parser.add_argument('role', type=str, required=True, help='Role is required')

@namespace.route('/signup')
class SignupResource(Resource):
    @namespace.expect(signup_model)
    @namespace.response(201, 'User registered successfully')
    @namespace.response(500, 'Internal server error')
    def post(self):
        '''User signup'''

        args = signup_parser.parse_args()

        # Hash the password using the pbkdf2:sha256 method
        hashed_password = generate_password_hash(args['password'], method='pbkdf2:sha256')

        # Save user_data to the database
        try:
            users_collection = get_mongo_client()['MaceCaledon_db']['LoginData_table']
            user_data = {
                'username': args['username'],
                'email': args['email'],
                'password': hashed_password,
                'role': args['role']
            }
            users_collection.insert_one(user_data)
            logging.info(f"User registered successfully with email: {args['email']} and role: {args['role']}")
            return {'message': 'User registered successfully'}, 201
        except PyMongoError as e:
            logging.error(f"Error saving user to the database: {e}")
            return {'message': 'Internal server error'}, 500

    def get(self):
        with app.app_context():
            # Log GET request
            logging.info("Received GET request to /signup")
            return {'message': 'This is the signup page'}
