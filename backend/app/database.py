from pymongo import MongoClient
from os import getenv

client = MongoClient(getenv("MONGODB_URI"))
db = client["movie_search"]
history_collection = db["history"]
