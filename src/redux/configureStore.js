import { configureStore } from '@reduxjs/toolkit';
import Books from './BookList/BookList';
import Categories from './Categories/Categories';

const store = configureStore({
  reducer: {
    books: Books,
    categories: Categories
  },
})

export default store;
console.log(store.getState());