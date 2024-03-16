import pymongo as pm
from config.Config import MONGO_CONNECTION

class MongoService:
    def __init__(self):
        self.mongo_connection = pm.MongoClient(
            host=MONGO_CONNECTION['host'], 
            port=MONGO_CONNECTION['port']
        )

    def list_databases(self):
        return self.mongo_connection.list_database_names()
    
    def insert_to_collection(self, collection_name, data):
        mongo_collection = self.mongo_connection[MONGO_CONNECTION['db']][collection_name]

        if isinstance(data, list):
            # If data is a list, use insert_many
            mongo_collection.insert_many(data)
        else:
            # If data is not a list, treat it as a single document and use insert_one
            mongo_collection.insert_one(data)

        print("Successfully added data to the {} collection".format(collection_name))

    def get_from_collection(self, collection_name, mongo_id=None):
        mongo_collection = self.mongo_connection[MONGO_CONNECTION['db']][collection_name]
        mongo_data = mongo_collection.find({}, {'_id': False})
        return list(mongo_data)
    
    def drop_collection(self, collection_name=None):
        if collection_name is None:
            self.mongo_connection.drop_database(MONGO_CONNECTION['db'])
        else:
            self.mongo_connection[MONGO_CONNECTION['db']].drop_collection(collection_name)

    def get_collection_names(self):
        return self.mongo_connection[MONGO_CONNECTION['db']].list_collection_names() or ["no data in the mongo database"]
