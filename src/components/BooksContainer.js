import React from 'react';

import BookItem from './BookItem';

const BooksContainer = () => {
  const bookItem = {
    id: 1,
    title: 'The Green Mile',
    author: 'Stephen King',
  };

  const { title, author } = bookItem;

  return (
    <>
      <BookItem title={title} author={author} />
    </>
  );
};

export default BooksContainer;
