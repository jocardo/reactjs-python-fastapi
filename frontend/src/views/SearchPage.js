// frontend/src/pages/SearchPage.js
import React, { useState } from 'react';
import '../assets/SearchPage.css';

function SearchPage() {
    const [name, setName] = useState('');
    const [movie, setMovie] = useState('');
    const [error, setError] = useState(null);
    const [responseMovie, setresponseMovie] = useState(null);
    const API_URL = process.env.API_URL || 'http://localhost:8000';

    const handleSearch = async () => {
        setError(null); // Limpa o erro ao iniciar uma nova busca
        setresponseMovie(null); // Limpa o filme encontrado ao iniciar uma nova busca
        // Verifica se ambos os campos estão preenchidos
        if (!name || !movie) {
            setError('Os campos "Nome" e "Filme" são obrigatórios.');
            return;
        }
        try {
            const response = await fetch(API_URL+'/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_name: name, movie_name: movie })
            });
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Filme não encontrado.');
                }else if (response.status === 500) {
                    throw new Error('Erro no servidor.');
                }
            }

            const data = await response.json();

            if (!data.title) {
                throw new Error('Filme não encontrado');
            }
            setresponseMovie(data.title);
        } catch (error) {
            setError(error.message || 'Ocorreu um erro ao buscar o filme.');
        } finally {
            setName('');
            setMovie('');
        }
    };

    return (
        <div className="search-container">
            <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Digite o nome do Filme" value={movie} onChange={(e) => setMovie(e.target.value)} />
            <button onClick={handleSearch}>Buscar</button>
            {error && <p className="error-message">{error}</p>}
            {responseMovie && <p className="movie-name">Filme: {responseMovie}</p>}
        </div>
    );
}

export default SearchPage;
