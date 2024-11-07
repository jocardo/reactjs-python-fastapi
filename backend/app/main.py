import sys
import os

# Adiciona o caminho da pasta 'backend' ao sys.path (não 'backend/app')
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from fastapi import FastAPI, HTTPException
from .database import history_collection
from .models import SearchHistory
from .schemas import SearchRequest, SearchResponse
from .services import fetch_movie
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir qualquer origem
    allow_credentials=True,
    allow_methods=["*"],  # Permitir qualquer método HTTP
    allow_headers=["*"],  # Permitir qualquer cabeçalho
)

@app.post("/search", response_model=SearchResponse)
async def search_movie(request: SearchRequest):
    
    # Save to database
    history_collection.insert_one({
        "user_name": request.user_name,
        "movie_name": request.movie_name,
        "timestamp": datetime.utcnow()
    })
    
    try:
        movie_data = fetch_movie(request.movie_name)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    if not movie_data:
        raise HTTPException(status_code=404, detail="Movie not found")

    # Extracting movie details (customize based on API response)
    return SearchResponse(
        title=movie_data['name'],  # Altere de 'title' para 'name'
        description=movie_data.get('description', 'No description available'),  # Se não houver descrição, use um valor padrão
        director=movie_data.get('director', 'Unknown'),  # Caso não tenha diretor, atribua 'Unknown'
        year=movie_data.get('year', 0)  # Se não houver ano, use 0
    )

@app.get("/history")
async def get_search_history():
    history = list(history_collection.find({}, {"_id": 0}))
    return {"history": history}
