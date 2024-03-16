from flask_restx import Resource, reqparse
from flask import current_app as app, jsonify
from pymongo.mongo_client import MongoClient
from werkzeug.security import check_password_hash, generate_password_hash
from models.user import User  # Assuming 'User' model is defined in 'models/user.py'

# Assuming 'api' is defined in the main 'app.py'
from app import api

# Retrieve MongoDB credentials from environment variables
mongo_username = "your_mongo_username"
mongo_password = "your_mongo_password"
mongo_cluster_name = "your_mongo_cluster_name"

uri = f"mongodb+srv://{mongo_username}:{mongo_password}@{mongo_cluster_name}.wwe4olv.mongodb.net/?retryWrites=true&w=majority"

# Log MongoDB connection attempt
try:
    # Create a new client and connect to the server
    client = MongoClient(uri)
    app.logger.info("Connected to MongoDB successfully.")
except Exception as e:
    app.logger.error(f"Error connecting to MongoDB: {e}")

# Access the 'users' collection
employees_collection = client['MaceCaledon_db_Users']['Employee_Details_table']

