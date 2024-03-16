import os

MONGO_CONNECTION = {
    "host": os.getenv(
        key='MONGO_HOSTNAME',
        default='mongo'),
    "port": int(os.getenv(
        key='MONGO_PORT',
        default='8200')),
    'db': os.getenv(
        key='DB_NAME',
        default='ExampleUsers')

}