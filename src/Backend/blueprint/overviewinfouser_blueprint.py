from flask import Blueprint
from .api.overviewinfouser_api import namespace  # Import namespace directly from api.overviewinfouser_api

overviewinfouser_bp = Blueprint('OverviewInfoUser', __name__)
api = None  # Remove the API instance from here

# Add resources to the API
# Instead of adding resources here, add them directly to the API in app.py

# Import at the end to break the circular import
from app import api  # Import the Flask-RestPlus API instance from app.py
api.add_namespace(namespace)  # Add the namespace to the API in app.py
