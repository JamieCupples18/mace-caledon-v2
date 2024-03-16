import os
from decouple import config

class Config:
    SECRET_KEY = config('SECRET_KEY')
    SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool)
    API_VERSION = '0.0.1'
    MONGO_CONNECTION = {
        "host": os.getenv('MONGO_HOSTNAME', 'mongo'),
        "port": int(os.getenv('MONGO_PORT', 8200)),
        "db": os.getenv('DB_NAME', 'ExampleUsers')
    }

class DevConfig(Config):
    # Load MongoDB credentials from environment variables
    MONGO_USERNAME = config('MONGO_USERNAME', default='')
    MONGO_PASSWORD = config('MONGO_PASSWORD', default='')

    # MongoDB URI format: 'mongodb://username:password@host:port/database'
    MONGO_URI = f"mongodb://{MONGO_USERNAME}:{MONGO_PASSWORD}@{Config.MONGO_CONNECTION['host']}:{Config.MONGO_CONNECTION['port']}/{Config.MONGO_CONNECTION['db']}"
    
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = MONGO_URI
    SQLALCHEMY_ECHO = True

class ProdConfig:
    pass

class TestConfig:
    pass

