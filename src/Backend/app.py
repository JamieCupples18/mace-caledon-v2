# Backend (Flask)

from flask_restx import Resource, Namespace, reqparse, Api
from flask import Flask, session, jsonify, request
from flask_session import Session
from pymongo.errors import PyMongoError
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
import logging
from pymongo import ReturnDocument
from flask import send_file
from config.mongoconfig import MONGO_CONNECTION
from config.mongo_setup import get_mongo_client  # Importing get_mongo_client method
from werkzeug.security import check_password_hash, generate_password_hash
import secrets

# Create Flask application
app = Flask(__name__)
app.config['SECRET_KEY'] = '_5#y2L"F4Q8z\n\xec]/'
app.config['SESSION_TYPE'] = 'filesystem'

# Initialize Flask-Session
Session(app)
CORS(app)

load_dotenv()

api = Api(
    app,
    title='API Documentation',
    version='1.0',
    description='APIs for your application',
    doc='/docs'  # Set the documentation URL
)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create Namespace
signup = Namespace('signup', 'Authentication')
login = Namespace('login', 'Authentication')
overviewinfo = Namespace('overviewinfouser', 'Overview info user')

# Register the Namespace with the API
api.add_namespace(signup)
api.add_namespace(login)
api.add_namespace(overviewinfo)

# Get the configured MongoDB client
mongoClient = get_mongo_client()

# Access the 'users' collection
users_collection = mongoClient['MaceCaledon_db']['ProfileCollection']


#================================= SWAGGER API ===========================================

@app.route('/swagger.json')
@cross_origin()
def send_swagger():
    return send_file('swagger.json')

#================================= SIGNUP API ===========================================

@signup.route('/signup', methods=['GET', 'POST'])
class SignupResource(Resource):
    user_parser = reqparse.RequestParser()
    user_parser.add_argument('username', type=str, required=True, help='Username is required')
    user_parser.add_argument('email', type=str, required=True, help='Email is required')
    user_parser.add_argument('password', type=str, required=True, help='Password is required')
    user_parser.add_argument('role', type=str, required=True, help='Role is required')

    allowed_roles = {'Admin', 'Manager', 'Supervisor', 'Employee'}

    @signup.expect(user_parser)
    def post(self):
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
            'role': args['role'],
            'employeeId': '',  # Default value
            'manager': '',  # Default value
            'supervisor': '',  # Default value
            'location': '',  # Default value
        }

        # Save user_data to the database
        try:
            users_collection.insert_one(user_data)
            logging.info(f"User registered successfully with email: {args['email']} and role: {args['role']}")

            # Store user information in session
            session['email'] = args['email']
            session['role'] = args['role']

            return {'message': 'User registered successfully'}, 201
        except Exception as e:
            logging.error(f"Error saving user to the database: {e}")
            return {'message': 'Internal server error'}, 500


    def get(self):
        # Log GET request
        logging.info("Received GET request to /signup")
        return {'message': 'This is the signup page'}


# ================================= LOGIN API ===========================================

@login.route('/login', methods=['POST'])
class LoginResource(Resource):
    login_parser = reqparse.RequestParser()
    login_parser.add_argument('email', type=str, required=True, help='Email is required')
    login_parser.add_argument('password', type=str, required=True, help='Password is required')

    @login.expect(login_parser)
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
                    # Store user information in session
                    session['email'] = email
                    session['role'] = user_data['role']
                    return {'message': 'Login successful', 'role': user_data['role'], 'redirectUrl': '/Admin'}, 200
                else:
                    logging.warning(f"Invalid credentials for user with email: {email}")
                    return {'message': 'Invalid credentials'}, 401

            except Exception as e:
                logging.error(f"Error querying the database for user with email {email}: {e}")
                return {'message': 'Internal server error'}, 500
            

#================================= USER DETAILS / Account Basic Information API ===========================================
            
@overviewinfo.route('/save')
class UpdateRecord(Resource):
    overviewinfo_parser = reqparse.RequestParser()
    overviewinfo_parser.add_argument('email', type=str, required=True, help='Email is required')
    overviewinfo_parser.add_argument('manager', type=str, required=True, help='manager is required')
    overviewinfo_parser.add_argument('supervisor', type=str, required=True, help='supervisor is required')

    def post(self):
        data = request.json
        email = data['email']
        manager = data['manager']
        supervisor = data['supervisor']

        result = users_collection.update_one(
            {"email" : email},
            {"$set": {"manager": manager, "supervisor": supervisor}}
        )

        if result.matched_count:
            return {'success': True, "message": "Record updated successfully."}, 200
        else:
            return {'success': False, "message": "Email not found."}, 404


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
