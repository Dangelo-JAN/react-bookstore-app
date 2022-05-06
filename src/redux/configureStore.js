import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './BookList/BookList';
import categoriesReducer from './Categories/Categories';

const middleWare = applyMiddleware(thunk, logger);

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
  middleWare,
});

export default store;
