import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/NavigationButtons.css';

function Navbar() {
    return (
        <nav>
            <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Busca</NavLink></li>
            <li><NavLink to="/history" className={({ isActive }) => isActive ? 'active' : ''}>Histôrico</NavLink></li>
            </ul>
        </nav>
        
    );
}

export default Navbar;