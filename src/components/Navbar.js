import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">BookStore</Link></li>
      <li><Link to="categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;
