import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './BookList/BookList';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
