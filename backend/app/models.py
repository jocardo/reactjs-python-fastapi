# backend/app/models.py
from pydantic import BaseModel
from datetime import datetime

class SearchHistory(BaseModel):
    user_name: str
    movie_name: str
    timestamp: datetime
