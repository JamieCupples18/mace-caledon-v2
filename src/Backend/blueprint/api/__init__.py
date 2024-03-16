from flask_restx import Api

from .overviewinfouser_api import namespace as overviewinfouser_ns
# Import other API namespaces here if you have more

api = Api(
    title='Your API',
    version='1.0',
    description='APIs for your application',
    doc='/docs'  # Set the documentation URL
)

# Add all namespaces to the API
api.add_namespace(overviewinfouser_ns)
# Add other namespaces here if you have more
