import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooks } from '../redux/BookList/BookList';

const BookForm = () => {
  const dispatch = useDispatch();
  const [createBook, setCreateBook] = useState(
    {
      title: '',
      author: '',
    },
  );
  const { title, author } = createBook;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBooks(title, author));
  };

  const onInputChange = (e) => {
    setCreateBook({
      ...createBook,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          placeholder="Add Title..."
          onChange={onInputChange}
        />
      </label>
      <label htmlFor="title">
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          placeholder="Add Author..."
          onChange={onInputChange}
        />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
