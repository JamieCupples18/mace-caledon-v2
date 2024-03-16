from flask_restx import Resource, Namespace, reqparse
from flask import current_app as app
from pymongo.errors import PyMongoError
import logging


from .models.overviewinfouser_model import Overviewinfosavemodel
from .models.overviewinfouser_model import Overviewinforesponsemodel
from config.mongo_setup import get_mongo_client


namespace = Namespace('overviewinfouser', 'Overview info user')


# Request parser for saving panel data
save_panel_parser = reqparse.RequestParser()
save_panel_parser.add_argument('employeeId', type=str, required=True, help='Employee ID is required')
save_panel_parser.add_argument('location', type=str, required=True, help='Location is required')
save_panel_parser.add_argument('manager', type=str, required=True, help='Manager is required')
save_panel_parser.add_argument('supervisor', type=str, required=True, help='Supervisor is required')

@namespace.route('/save', methods=['POST'])
class PanelSaveResource(Resource):
    @namespace.expect(Overviewinfosavemodel, code=200)
    def post(self):
        with app.app_context():
            data = namespace.payload
            employee_id = data['employeeId']
            location = data['location']
            manager = data['manager']
            supervisor = data['supervisor']

            logging.info("Received request to save overview info data")

            try:
                overview_collection = get_mongo_client()['AccountDetails']['OverviewInfo']
                data = {
                    'employeeId': employee_id,
                    'location': location,
                    'manager': manager,
                    'supervisor': supervisor
                }
                overview_collection.insert_one(data)

                logging.info("Overview info data saved successfully")
                return {'message': 'Overview info data saved successfully'}, 201

            except PyMongoError as e:
                logging.error(f"Error saving overview info data: {e}")
                return {'message': 'Internal server error'}, 500
            


@namespace.route('/get', methods=['GET'])
class PanelGetResource(Resource):
    @namespace.marshal_with(Overviewinforesponsemodel, code=200)
    def get(self):
        with app.app_context():
            try:
                overview_collection = get_mongo_client()['AccountDetails']['OverviewInfo']
                panels = list(overview_collection.find())

                logging.info("Retrieved overview info data successfully")
                return panels, 200

            except PyMongoError as e:
                logging.error(f"Error retrieving overview info data: {e}")
                return {'message': 'Internal server error'}, 500

@namespace.route('/delete', methods=['DELETE'])
class PanelDeleteResource(Resource):
    def delete(self):
        with app.app_context():
            try:
                overview_collection = get_mongo_client()['AccountDetails']['OverviewInfo']
                overview_collection.delete_many({})

                logging.info("Deleted all overview info data successfully")
                return {'message': 'Deleted all overview info data successfully'}, 200

            except PyMongoError as e:
                logging.error(f"Error deleting overview info data: {e}")
                return {'message': 'Internal server error'}, 500