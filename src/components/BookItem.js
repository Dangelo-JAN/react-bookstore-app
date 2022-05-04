import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBooks } from '../redux/BookList/BookList';

const BookItem = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBooks(book));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className="list-group-item">
          <div className="book-description">
            <span className="title">{book.title}</span>
            <span className="author">{book.author}</span>
          </div>
          <div className="control-buttons">
            <button onClick={() => handleRemoveBook(book)} type="button">
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookItem;
