# employee_blueprint.py
from flask import Blueprint
from flask_restx import Api
from api.employee import AddEmployeeResource

employee_bp = Blueprint('employee', __name__)
api = Api(employee_bp, doc='/docs', version='1.0', title='Employee API', description='API for employee management')

# Add resources to the API
api.add_resource(AddEmployeeResource, '/addemployee')

from app import app
app.register_blueprint(employee_bp, url_prefix='/employee')