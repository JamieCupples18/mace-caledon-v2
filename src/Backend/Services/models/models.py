from flask_pymongo import PyMongo
from flask import current_app

mongo = PyMongo()

def init_app(app):
    with app.app_context():
        mongo.init_app(app)

class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password

    def save(self):
        # Assuming 'users' is the collection name
        mongo.db.users.insert_one({
            'username': self.username,
            'email': self.email,
            'password': self.password
        })
