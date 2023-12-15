import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
 const [showMenu, setShowMenu] = useState(false);

 const toggleMenu = () => {
    setShowMenu(!showMenu);
 };

 return (
    <nav className="home">
      <div className="menu">
        <ul className={showMenu ? 'show-menu' : ''}>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/vente">Vente</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
 );
}

export default Navbar;