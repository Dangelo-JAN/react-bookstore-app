import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Navbar from './components/Navbar';
import BookForm from './components/BookForm';
import Categories from './pages/Categories';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
      <BookForm />
    </>
  );
}

export default App;
