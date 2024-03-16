from flask_restx import Resource, reqparse
from flask import current_app as app, jsonify, request
from pymongo.mongo_client import MongoClient
from werkzeug.security import check_password_hash, generate_password_hash
from models.authentication import AuthenticationDetails
from config.mongo_setup import get_mongo_client
from flask_restx import Api 
from app import api 

import logging

# def initialise_api(app):
#     with app.app_context():
#         api = Api(app)  # No need to pass `app.api` as a parameter
#         return api


# Get the configured MongoDB client
mongoClient = get_mongo_client()

# Access the 'users' collection
users_collection = mongoClient['MaceCaledon_db']['LoginData_table']

# Define the Flask-RESTx resource

@api.route('/signup', methods=['GET', 'POST'])
class SignupResource(Resource):
    user_parser = reqparse.RequestParser()
    user_parser.add_argument('username', type=str, required=True, help='Username is required')
    user_parser.add_argument('email', type=str, required=True, help='Email is required')
    user_parser.add_argument('password', type=str, required=True, help='Password is required')
    user_parser.add_argument('role', type=str, required=True, help='Role is required')

    allowed_roles = {'Admin', 'Manager', 'Supervisor', 'Employee'}

    @api.expect(user_parser)
    def post(self):
        with app.app_context():
            args = self.user_parser.parse_args()

            # Validate the role
            if args['role'] not in self.allowed_roles:
                return {'message': 'Invalid role. Allowed roles are Admin, Manager, Supervisor, Employee'}, 400

            # Hash the password using the pbkdf2:sha256 method
            hashed_password = generate_password_hash(args['password'], method='pbkdf2:sha256')

            # Now, you can save the hashed_password in your database
            # For example, assuming you have a MongoDB collection called users_collection:
            user_data = {
                'username': args['username'],
                'email': args['email'],
                'password': hashed_password,
                'role': args['role']
            }

            # Save user_data to the database
            try:
                users_collection.insert_one(user_data)
                logging.info(f"User registered successfully with email: {args['email']} and role: {args['role']}")
                return {'message': 'User registered successfully'}, 201
            except Exception as e:
                logging.error(f"Error saving user to the database: {e}")
                return {'message': 'Internal server error'}, 500


    def get(self):
        with app.app_context():
            # Log GET request
            logging.info("Received GET request to /signup")
            return {'message': 'This is the signup page'}




@api.route('/login', methods=['POST'])
class LoginResource(Resource):
    login_parser = reqparse.RequestParser()
    login_parser.add_argument('email', type=str, required=True, help='Email is required')
    login_parser.add_argument('password', type=str, required=True, help='Password is required')

    @api.expect(login_parser)
    def post(self):
        with app.app_context():
            args = self.login_parser.parse_args()
            email = args['email']
            password = args['password']

            logging.info(f"Received login request with email: {email}")

            try:
                user_data = users_collection.find_one({'email': email})

                if user_data and check_password_hash(user_data['password'], password):
                    logging.info(f"Successful login for user with email: {email} and role: {user_data['role']}")
                    return {'message': 'Login successful', 'role': user_data['role'], 'redirectUrl': '/Admin'}, 200
                else:
                    logging.warning(f"Invalid credentials for user with email: {email}")
                    return {'message': 'Invalid credentials'}, 401

            except Exception as e:
                logging.error(f"Error querying the database for user with email {email}: {e}")
                return {'message': 'Internal server error'}, 500

    

