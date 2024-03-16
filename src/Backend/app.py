from flask_restx import Resource, Namespace, reqparse, Api
from flask import Flask, session, jsonify, Request
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
            
def get_session_email():
    return session.get('email')

save_panel_parser = reqparse.RequestParser()
save_panel_parser.add_argument('employeeId', required=True, help="Employee ID cannot be blank")
save_panel_parser.add_argument('manager', required=True, help="Manager cannot be blank")
save_panel_parser.add_argument('supervisor', required=True, help="Supervisor cannot be blank")
save_panel_parser.add_argument('location', required=True, help="Location cannot be blank")

@overviewinfo.route('/save')
class UpdateProfile(Resource):  # Renamed to UpdateProfile for clarity
    @overviewinfo.expect(save_panel_parser)
    @cross_origin()
    def post(self):
        args = save_panel_parser.parse_args()

        # Data to update
        employee_id = args['employeeId']
        location = args['location']
        manager = args['manager']
        supervisor = args['supervisor']

        user_email = session.get('email')

        if not user_email:
            return {"error": "Session email is required"}, 400
        print(user_email)
        
        update_data = {  # Removed unnecessary use of request.get_json()
            'employeeId': employee_id,
            'location': location,
            'manager': manager,
            'supervisor': supervisor
        }
        print(update_data)

        try:
            # Update user profile in the database
            result = users_collection.find_one_and_update(
                {"email": user_email},
                {"$set": update_data},
                return_document=ReturnDocument.AFTER
            )
            print(result)

            if result:
                return {"message": "Profile updated successfully"}, 200
            else:
                return {"error": "User not found"}, 404

        except PyMongoError as e:
            logging.error(f"Error updating profile for user with email {user_email}: {e}")
            return {'message': 'Internal server error'}, 500


# @overviewinfo.route('/saveaa', methods=['POST'])
# class PanelSaveResource(Resource):
#     @overviewinfo.expect(save_panel_parser)
#     @cross_origin()
#     def post(self):
#         with app.app_context():
#             mongo_client = get_mongo_client()  # Use get_mongo_client method to get MongoDB client
#             if mongo_client is None:
#                 logging.error("Failed to connect to MongoDB.")
#                 return {'message': 'Failed to connect to MongoDB '}, 500
            
#             data = save_panel_parser.parse_args()
#             employee_id = data['employeeId']
#             location = data['location']
#             manager = data['manager']
#             supervisor = data['supervisor']

#             # Get user information from session
#             email = session.get('email')
#             if email is None:
#                 logging.error("User information not found in session.")
#                 return {'message': 'User information not found'}, 401

#             logging.info(f"Received request to save overview info data for email: {email}")

#             try:
#                 # Check if the user exists in the database
#                 user = users_collection.find_one({'email': email})
#                 if user:
#                     # Update the user's profile with the new information
#                     users_collection.update_one(
#                         {'email': email},
#                         {'$set': {
#                             'employeeId': employee_id,
#                             'location': location,
#                             'manager': manager,
#                             'supervisor': supervisor
#                         }},
#                         upsert=True
#                     )
#                     logging.info("Overview info data saved successfully")
#                     return {'message': 'Overview info data saved successfully'}, 201
#                 else:
#                     logging.error(f"User with email {email} not found in the database.")
#                     return {'message': 'User not found'}, 404

#             except PyMongoError as e:
#                 logging.error(f"Error saving overview info data: {e}")
#                 return {'message': 'Internal server error'}, 500


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
