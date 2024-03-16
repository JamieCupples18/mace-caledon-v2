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
