# backend/app/services.py
import requests
from dotenv import load_dotenv
from os import getenv

load_dotenv() 

API_KEY = getenv("API_KEY")
API_URL = "https://the-one-api.dev/v2/movie"

def fetch_movie(movie_name):
    headers = {"Authorization": f"Bearer {API_KEY}"}
    response = requests.get(f"{API_URL}?name={movie_name}", headers=headers)
    response.raise_for_status()
    
    movie_data = response.json()
    print("Resposta da API:", movie_data)

    # Agora, procure o filme pelo nome exato ou parte do nome
    for movie in movie_data['docs']:
        if movie_name.lower() in movie['name'].lower():  # Ignora diferenças de maiúsculas/minúsculas
            return movie  # Retorna o filme encontrado
