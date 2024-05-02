// Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../style/styles.css' // Import styles

const Header: React.FC = () => {
  return (
    <header>
    <nav>
      <div className="left-nav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>Store Name</span>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <ul style={{display:'flex', alignContent: 'center', listStyle: 'none', padding: 0, margin: 10}}>
          <li style={{marginRight: 10}}><Link to="/"> Home</Link></li>
          <li style={{marginRight: 10}}><Link to="/cart"> Cart</Link></li>
          <li style={{marginRight: 10}}><Link to="/delivery">Delivery</Link></li>
          <li style={{marginRight: 10}}><Link to="/authorization">Login</Link></li>
        </ul>
      </div>
    </nav>
  </header>
  );
};

export default Header;
