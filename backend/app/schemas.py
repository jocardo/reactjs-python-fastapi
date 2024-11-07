# backend/app/schemas.py
from pydantic import BaseModel

class SearchRequest(BaseModel):
    user_name: str
    movie_name: str

class SearchResponse(BaseModel):
    title: str
    description: str
    director: str
    year: int
