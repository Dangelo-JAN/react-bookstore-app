import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, removeBooks } from '../redux/BookList/BookList';

const BookItem = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleRemoveBook = (book) => {
    dispatch(removeBooks(book));
  };

  return (
    <div className="main-container">
      <ul className="padding-top">
        {books.map((book) => (
          <li key={book.id} className="container">
            <div className="book-info">
              <div className="description">
                <p className="categorie-stile">General</p>
                <h3 className="title">{book.title}</h3>
                <p className="author">{book.author}</p>
              </div>
              <div className="container book-buttons">
                <button type="button" className="book-button">Comment</button>
                <button type="button" className="book-button" onClick={() => handleRemoveBook(book.id)}>
                  Remove
                </button>
                <button type="button" className="book-button">Edit</button>
              </div>
            </div>
            <div className="container">
              <div className="circle-container">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill" />
                  </div>
                  <div className="mask half">
                    <div className="fill" />
                  </div>
                  <div className="inside-circle" />
                </div>
              </div>
              <div>
                <p className="percentage repeated">75%</p>
                <p className="completed repeated">completed</p>
              </div>
            </div>
            <div className="third">
              <p className="current repeated">CURRENT CHAPTER</p>
              <p className="chapter repeated">Chapter 17</p>
              <button className="progress-btn" type="button"><span className="progress repeated">UPDATE PROGRESS</span></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookItem;
