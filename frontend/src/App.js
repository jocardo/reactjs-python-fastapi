import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'; // Substituindo Link por NavLink
import Navbar from './components/Navbar';
import SearchPage from './views/SearchPage';
import HistoryPage from './views/HistoryPage';

function App() {
  return (
    <BrowserRouter>    
    <Navbar /> {}
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
