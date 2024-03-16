from flask_restx import Resource, fields, Namespace, reqparse
from pymongo.errors import PyMongoError
from flask import current_app as app, jsonify
from flask_cors import cross_origin  # Import the cross_origin decorator
from werkzeug.security import check_password_hash
from config.mongo_setup import get_mongo_client
import logging

namespace = Namespace('user', 'User related endpoints')

login_model = namespace.model('Login', {
    'email': fields.String(
        required=True,
        description='User email'
    ),
    'password': fields.String(
        required=True,
        description='User password'
    )
})

@namespace.route('/login', methods=['POST', 'OPTIONS'])
class LoginResource(Resource):
    login_parser = reqparse.RequestParser()
    login_parser.add_argument('email', type=str, required=True, help='Email is required')
    login_parser.add_argument('password', type=str, required=True, help='Password is required')

    @cross_origin()
    def options(self):
        response = {
            'Allow': 'POST, OPTIONS',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
        return response, 200

    @namespace.expect(login_parser)
    def post(self):
        with app.app_context():
            args = self.login_parser.parse_args()
            email = args['email']
            password = args['password']

            logging.info(f"Received login request with email: {email}")

            try:
                users_collection = get_mongo_client()['MaceCaledon_db']['LoginData_table']
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