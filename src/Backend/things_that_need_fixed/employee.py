from flask_restx import Resource, reqparse
from flask import current_app as app, jsonify
from pymongo.mongo_client import MongoClient
from models.employee import AddEmployee
import logging
from flask_restx import Api 
from app import api 
from config.mongo_setup import get_mongo_client


# def initialise_api():
#     with app.app_context():
#         api = Api(app)  # Assuming 'api' is defined in the main 'app.py'
#         return api




# Get the configured MongoDB client
mongoClient = get_mongo_client()

# Access the 'employees' collection
employees_collection = mongoClient['MaceCaledon_db_Users']['Employee_Details_table']



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
        with app.app_context():
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
        with app.app_context():
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


