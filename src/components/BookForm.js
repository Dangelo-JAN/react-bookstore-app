import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/BookList/BookList';

const BookForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formTitle = e.target.title.value;
    const formAuthor = e.target.author.value;

    const newBook = {
      id: uuidv4(),
      title: formTitle,
      author: formAuthor,
      category: 'General',
    };

    if (formTitle.trim() && formAuthor.trim()) {
      dispatch(createBook(newBook));
      e.target.title.value = '';
      e.target.author.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add Title..."
          required
        />
      </label>
      <label htmlFor="title">
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Add Author..."
          required
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
