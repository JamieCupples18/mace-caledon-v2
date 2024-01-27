# app.py
from flask import Flask, request, jsonify
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from dotenv import load_dotenv
from flask_restx import Api, Resource, reqparse, fields
from flask_cors import CORS
import os
import logging
from flask_talisman import Talisman
from werkzeug.security import check_password_hash


# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

CORS(app)

# Enable HTTPS by default and add other security-related configurations
talisman = Talisman(
    app,
    content_security_policy={
        'default-src': '\'self\'',
        'style-src': [
            '\'self\'',
            'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        ],
    },
    force_https=True,
)
# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Create a Flask-RESTx API
api = Api(app, doc='/docs', version='1.0', title='User API', description='API for user management')

# Retrieve MongoDB credentials from environment variables
mongo_username = os.getenv('MONGO_USERNAME')
mongo_password = os.getenv('MONGO_PASSWORD')
mongo_cluster_name = os.getenv('MONGO_CLUSTER_NAME')

uri = f"mongodb+srv://{mongo_username}:{mongo_password}@{mongo_cluster_name}.wwe4olv.mongodb.net/?retryWrites=true&w=majority"

# Log MongoDB connection attempt
try:
    # Create a new client and connect to the server
    client = MongoClient(uri, server_api=ServerApi('1'))
    logging.info("Connected to MongoDB successfully.")
except Exception as e:
    logging.error(f"Error connecting to MongoDB: {e}")

# Access the 'users' collection
users_collection = client['MaceCaledon_db']['LoginData_table']
employees_collection = client['MaceCaledon_db_Users']['Employee_Details_table']

# User model
class User:
    def __init__(self, username, email, password, role):
        self.username = username
        self.email = email
        self.password = password
        self.role = role
        


"""This is the signup GET and POST method"""
# Define the Flask-RESTx resource
@api.route('/signup', methods=['GET', 'POST'])
class SignupResource(Resource):
    # Use reqparse to define parameters for the /signup endpoint
    user_parser = reqparse.RequestParser()
    user_parser.add_argument('username', type=str, required=True, help='Username is required')
    user_parser.add_argument('email', type=str, required=True, help='Email is required')
    user_parser.add_argument('password', type=str, required=True, help='Password is required')
    user_parser.add_argument('role', type=str, required=True, help='Role is required')

    # Use api.expect decorator to add parameters to Swagger documentation
    @api.expect(user_parser)
    def post(self):
        # Parse the arguments
        args = self.user_parser.parse_args()

        # Extract user data from the parsed arguments
        username = args['username']
        email = args['email']
        password = args['password']
        role = args['role']

        # Log received data
        logging.info(f"Received signup request with data: {args}")

        # Simple role check
        if role not in ['Admin', 'Manager', 'Supervisor', 'Employee']:
            return {'message': 'Invalid role. Allowed roles are Admin, Manager, Supervisor, Employee'}, 400

        # Create a User instance
        new_user = User(username=username, email=email, password=password, role=role)

        # Convert User instance to a dictionary and insert into MongoDB
        user_dict = new_user.__dict__
        try:
            users_collection.insert_one(user_dict)
            logging.info(f"User {username} added to the database.")
        except Exception as e:
            logging.error(f"Error inserting user {username} into the database: {e}")
            return {'message': 'Internal server error'}, 500

        return {'message': 'User created successfully'}, 201

    def get(self):
        # Log GET request
        logging.info("Received GET request to /signup")
        return {'message': 'This is the signup page'}
    

@api.route('/login', methods=['POST'])
class LoginResource(Resource):
    # Use reqparse to define parameters for the /login endpoint
    login_parser = reqparse.RequestParser()
    login_parser.add_argument('email', type=str, required=True, help='Email is required')
    login_parser.add_argument('password', type=str, required=True, help='Password is required')

    # Use api.expect decorator to add parameters to Swagger documentation
    @api.expect(login_parser)
    def post(self):
        # Parse the arguments
        args = self.login_parser.parse_args()

        # Extract user data from the parsed arguments
        email = args['email']
        password = args['password']

        # Log received data (be cautious when logging sensitive information)
        logging.info(f"Received login request with email: {email}")

        try:
            # Fetch user from the database based on email
            user_data = users_collection.find_one({'email': email})

            # Check if the user exists and if the password matches
            if user_data and check_password_hash(user_data['password'], password):
                # Log successful login and user role
                logging.info(f"Successful login for user with email: {email} and role: {user_data['role']}")
                return {'message': 'Login successful', 'role': user_data['role'], 'redirectUrl': '/Admin'}, 200
            else:
                # Log invalid credentials
                logging.warning(f"Invalid credentials for user with email: {email}")
                return {'message': 'Invalid credentials'}, 401

        except Exception as e:
            # Log database query error
            logging.error(f"Error querying the database for user with email {email}: {e}")
            return {'message': 'Internal server error'}, 500




class PersonalInformation:
    def __init__(self, employee_id, first_name, middle_name, second_name, date_of_birth, national_id, gender, marital_status, address, phone_number, email):
        self.employee_id = employee_id
        self.first_name = first_name
        self.middle_name = middle_name
        self.second_name = second_name
        self.date_of_birth = date_of_birth
        self.national_id = national_id
        self.gender = gender
        self.marital_status = marital_status
        self.address = address
        self.phone_number = phone_number
        self.email = email

class EmploymentDetails:
    def __init__(self, job_title, department, date_of_hire, employment_status, work_location, hourly_rate, pay_frequency, tax_withholding_allowances, tax_identification_number, highest_level_of_education, education_attended, degrees_obtained, previous_work_experience):
        self.job_title = job_title
        self.department = department
        self.date_of_hire = date_of_hire
        self.employment_status = employment_status
        self.work_location = work_location
        self.hourly_rate = hourly_rate
        self.pay_frequency = pay_frequency
        self.tax_withholding_allowances = tax_withholding_allowances
        self.tax_identification_number = tax_identification_number
        self.highest_level_of_education = highest_level_of_education
        self.education_attended = education_attended
        self.degrees_obtained = degrees_obtained
        self.previous_work_experience = previous_work_experience

class EmergencyContact:
    def __init__(self, emergency_contact_name, emergency_contact_number, emergency_contact_address):
        self.emergency_contact_name = emergency_contact_name
        self.emergency_contact_number = emergency_contact_number
        self.emergency_contact_address = emergency_contact_address

class Agreements:
    def __init__(self, employee_handbook_acknowledgement, code_of_conduct_agreement, non_disclosure_agreement, training_needs_request):
        self.employee_handbook_acknowledgement = employee_handbook_acknowledgement
        self.code_of_conduct_agreement = code_of_conduct_agreement
        self.non_disclosure_agreement = non_disclosure_agreement
        self.training_needs_request = training_needs_request

class AuthenticationDetails:
    def __init__(self, username, password, role, equipment_provided):
        self.username = username
        self.password = password
        self.role = role
        self.equipment_provided = equipment_provided


class AddEmployee:
    def __init__(
        self,
        personal_info,
        employment_details,
        emergency_contact,
        agreements,
        authentication_details
    ):
        self.personal_info = personal_info
        self.employment_details = employment_details
        self.emergency_contact = emergency_contact
        self.agreements = agreements
        self.authentication_details = authentication_details

#Add Employee Endpoint form

@api.route('/addemployee', methods=['POST', 'GET'])
class AddEmployeeResource(Resource):
    # Use reqparse to define parameters for the /addemployee endpoint
    employee_parser = reqparse.RequestParser()
    employee_parser.add_argument('EmployeeID', type=str, required=True, help='EmployeeID is required')
    employee_parser.add_argument('FirstName', type=str, required=True, help='First Name is required')
    employee_parser.add_argument('MiddleName', type=str)
    employee_parser.add_argument('SecondName', type=str)
    employee_parser.add_argument('DateOfBirth', type=str)
    employee_parser.add_argument('NationalID', type=str)
    employee_parser.add_argument('Gender', type=str)
    employee_parser.add_argument('MaritalStatus', type=str)
    employee_parser.add_argument('Address', type=str)
    employee_parser.add_argument('PhoneNumber', type=str)
    employee_parser.add_argument('Email', type=str)
    employee_parser.add_argument('JobTitle', type=str)
    employee_parser.add_argument('Department', type=str)
    employee_parser.add_argument('DateOfHire', type=str)
    employee_parser.add_argument('EmploymentStatus', type=str)
    employee_parser.add_argument('WorkLocation', type=str)
    employee_parser.add_argument('HourlyRate', type=str)
    employee_parser.add_argument('PayFrequency', type=str)
    employee_parser.add_argument('TaxWithholdingAllowances', type=str)
    employee_parser.add_argument('TaxIdentificationNumber', type=str)
    employee_parser.add_argument('HighestLevelOfEducation', type=str)
    employee_parser.add_argument('EducationAttended', type=str)
    employee_parser.add_argument('DegreesObtained', type=str)
    employee_parser.add_argument('PreviousWorkExperience', type=str)
    employee_parser.add_argument('EmergencyContactName', type=str)
    employee_parser.add_argument('EmergencyContactNumber', type=str)
    employee_parser.add_argument('EmergencyContactAddress', type=str)
    employee_parser.add_argument('EmployeeHandbookAcknowledgement', type=str)
    employee_parser.add_argument('CodeOfConductAgreement', type=str)
    employee_parser.add_argument('NonDisclosureAgreement', type=str)
    employee_parser.add_argument('TrainingNeedsRequest', type=str)
    employee_parser.add_argument('Username', type=str)
    employee_parser.add_argument('Password', type=str)
    employee_parser.add_argument('Role', type=str)
    employee_parser.add_argument('EquipmentProvided', type=str)

    # Use api.expect decorator to add parameters to Swagger documentation
    @api.expect(employee_parser)
    def post(self):
        # Parse the arguments
        args = self.employee_parser.parse_args()

          # Extract employee data from the parsed arguments
        employee_id = args['EmployeeID']
        first_name = args['FirstName']
        middle_name = args['MiddleName']
        second_name = args['SecondName']
        date_of_birth = args['DateOfBirth']
        national_id = args['NationalID']
        gender = args['Gender']
        marital_status = args['MaritalStatus']
        address = args['Address']
        phone_number = args['PhoneNumber']
        email = args['Email']
        job_title = args['JobTitle']
        department = args['Department']
        date_of_hire = args['DateOfHire']
        employment_status = args['EmploymentStatus']
        work_location = args['WorkLocation']
        hourly_rate = args['HourlyRate']
        pay_frequency = args['PayFrequency']
        tax_withholding_allowances = args['TaxWithholdingAllowances']
        tax_identification_number = args['TaxIdentificationNumber']
        highest_level_of_education = args['HighestLevelOfEducation']
        education_attended = args['EducationAttended']
        degrees_obtained = args['DegreesObtained']
        previous_work_experience = args['PreviousWorkExperience']
        emergency_contact_name = args['EmergencyContactName']
        emergency_contact_number = args['EmergencyContactNumber']
        emergency_contact_address = args['EmergencyContactAddress']
        employee_handbook_acknowledgement = args['EmployeeHandbookAcknowledgement']
        code_of_conduct_agreement = args['CodeOfConductAgreement']
        non_disclosure_agreement = args['NonDisclosureAgreement']
        training_needs_request = args['TrainingNeedsRequest']
        username = args['Username']
        password = args['Password']
        role = args['Role']
        equipment_provided = args['EquipmentProvided']

        # Log received data
        logging.info(f"Received request to add employee with ID: {employee_id}")

        try:
            # Check if the employee with the given ID already exists
            if employees_collection.find_one({'EmployeeID': employee_id}):
                return {'message': f'Employee with ID {employee_id} already exists'}, 400

            # Insert the employee data into the database
            employees_collection.insert_one({
                'EmployeeID': employee_id,
                'FirstName': first_name,
                'MiddleName': middle_name,
                'SecondName': second_name,
                'DateOfBirth': date_of_birth,
                'NationalID': national_id,
                'Gender': gender,
                'MaritalStatus': marital_status,
                'Address': address,
                'PhoneNumber': phone_number,
                'Email': email,
                'JobTitle': job_title,
                'Department': department,
                'DateOfHire': date_of_hire,
                'EmploymentStatus': employment_status,
                'WorkLocation': work_location,
                'HourlyRate':   hourly_rate,
                'PayFrequency': pay_frequency,
                'TaxWithholdingAllowances': tax_withholding_allowances,
                'TaxIdentificationNumber': tax_identification_number,
                'HighestLevelOfEducation': highest_level_of_education,
                'EducationAttended': education_attended,
                'DegreesObtained': degrees_obtained,
                'PreviousWorkExperience': previous_work_experience,
                'EmergencyContactName': emergency_contact_name,
                'EmergencyContactNumber': emergency_contact_number,
                'EmergencyContactAddress':  emergency_contact_address,
                'EmployeeHandbookAcknowledgement': employee_handbook_acknowledgement,
                'CodeOfConductAgreement': code_of_conduct_agreement,
                'NonDisclosureAgreement': non_disclosure_agreement,
                'TrainingNeedsRequest': training_needs_request,
                'Username': username,
                'Password': password,
                'Role': role,
                'EquipmentProvided': equipment_provided
            })

            # Log successful addition of employee
            logging.info(f"Successfully added employee with ID: {employee_id}")
            return {'message': 'Employee added successfully'}, 200

        except Exception as e:
            # Log database insertion error
            logging.error(f"Error inserting employee with ID {employee_id}: {e}")
            return {'message': 'Internal server error'}, 500
        

    @api.expect(employee_parser)
    def get(self):
        # Parse the arguments
        args = self.employee_parser.parse_args()

        # Extract employee ID from the parsed arguments
        employee_id = args['EmployeeID']

        try:
            # Fetch employee data from the database based on ID
            employee_data = employees_collection.find_one({'EmployeeID': employee_id})

            if employee_data:
                # Log successful retrieval of employee data
                logging.info(f"Successfully retrieved data for employee with ID: {employee_id}")
                return employee_data, 200
            else:
                # Log employee not found
                logging.warning(f"Employee with ID {employee_id} not found")
                return {'message': f'Employee with ID {employee_id} not found'}, 404

        except Exception as e:
            # Log database query error
            logging.error(f"Error querying the database for employee with ID {employee_id}: {e}")
            return {'message': 'Internal server error'}, 500

if __name__ == '__main__':
    # Run the development server with SSL for local testing
    # This uses a self-signed certificate for development purposes
    app.run(debug=True, host="0.0.0.0", port=8080, ssl_context='adhoc')
