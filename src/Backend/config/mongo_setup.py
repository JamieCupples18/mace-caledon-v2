# config/mongo_setup.py

import os
import logging
from flask import Flask, g  # Import flask and g
from pymongo.mongo_client import MongoClient
from dotenv import load_dotenv

load_dotenv()

# Set up logging (consider moving this to the main application setup)
logging.basicConfig(level=logging.DEBUG)

def get_mongo_client():
    # Retrieve MongoDB credentials from environment variables
    mongo_username = os.getenv('MONGO_USERNAME')
    mongo_password = os.getenv('MONGO_PASSWORD')
    mongo_cluster_name = os.getenv('MONGO_CLUSTER_NAME')

    # Validate environment variables
    if not (mongo_username and mongo_password and mongo_cluster_name):
        logging.error("Missing MongoDB environment variables.")
        raise ValueError("MongoDB environment variables are not set.")

    uri = f"mongodb+srv://{mongo_username}:{mongo_password}@{mongo_cluster_name}.wwe4olv.mongodb.net/?retryWrites=true&w=majority"

    # Log MongoDB connection attempt
    try:
        # Create a new client and connect to the server
        client = MongoClient(uri)
        logging.info("Connected to MongoDB successfully.")
        return client
    except ConnectionError as ce:
        logging.error(f"ConnectionError: {ce}")
        raise  # Reraise the exception for the application to handle
    except Exception as e:
        logging.error(f"Error connecting to MongoDB: {e}")
        raise
