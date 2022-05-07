import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import './components.css';

const Navbar = () => (
  <nav className="container navbar">
    <div className="container">
      <h1>Bookstore CMS</h1>
      <ul className="container">
        <li className=""><Link className="links" to="/" style={{ textDecoration: 'none' }}>Books</Link></li>
        <li className=""><Link className="links" to="categories" style={{ textDecoration: 'none' }}>Categories</Link></li>
      </ul>
    </div>
    <div className="icon-div">
      <ImUser
        className="icon-style"
        style={{ color: '#0290ff', fontSize: '20px' }}
      />
    </div>
  </nav>
);

export default Navbar;
