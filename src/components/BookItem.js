import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ title, author }) => (
  <>
    <div>Titulo</div>
    <p>{title}</p>
    <div>Author</div>
    <p>{author}</p>
    <button onClick={(e) => { e.preventDefault(); }} type="button">Remove</button>
  </>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
