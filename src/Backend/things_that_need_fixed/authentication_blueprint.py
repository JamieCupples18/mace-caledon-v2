# authentication_blueprint.py

from flask import Blueprint
from flask_restx import Api
from api.authentication import SignupResource, LoginResource

authentication_bp = Blueprint('authentication', __name__)
api = Api(authentication_bp, doc='/docs', version='1.0', title='Authentication API', description='API for user authentication')

# Add resources to the API
api.add_resource(SignupResource, '/signup')
api.add_resource(LoginResource, '/login')

# Import at the end to break the circular import
from app import app  # You might need to adjust this import based on your project structure
app.register_blueprint(authentication_bp, url_prefix='/authentication')
