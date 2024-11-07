import React, { useEffect, useState } from 'react';
import '../assets/HistoryPage.css';

function HistoryPage() {
    const [history, setHistory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const API_URL = process.env.API_URL || 'http://localhost:8000';

    useEffect(() => {
        const fetchHistory = async () => {
            const response = await fetch(API_URL+'/history');
            const data = await response.json();
            setHistory(data.history);
        };

        fetchHistory();
    }, []);

    const filteredHistory = history.filter(entry =>
        entry.user_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedHistory = filteredHistory.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="history-page">
            <div className="history-container">
                <div className="header">
                    <h2 className="history-title">Histórico</h2>
                    <div className="search-container">
                        <span className="search-icon">🔍</span> {/* Lupa */}
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && <span className="clear-icon" onClick={() => setSearchTerm('')}>❌</span>} {/* X para limpar */}
                    </div>
                </div>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Filme</th>
                            <th>Data/ Hora da Consulta</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedHistory.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.user_name}</td>
                                <td>{entry.movie_name}</td>
                                <td>{new Date(entry.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                <div className="items-per-page">
                    <select
                        id="itemsPerPage"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value={5}>5 linhas</option>
                        <option value={10}>10 linhas</option>
                        <option value={15}>15 linhas</option>
                        <option value={20}>20 linhas</option>
                    </select>
                </div>
                <div className="pagination-controls">
                    <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                        | &lt;
                    </button>
                    <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                        &lt;
                    </button>
                    <span>{currentPage} - {totalPages} de {totalPages}</span>
                    <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                        &gt;
                    </button>
                    <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                        &gt; |
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
export default HistoryPage;
