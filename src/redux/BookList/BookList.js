import { v4 as uuidv4 } from 'uuid';

// Action Types
const CREATE = 'react-bookstore-app/books/CREATE';
const REMOVE = 'react-bookstore-app/books/REMOVE';
const initialState = [
  {
    id: uuidv4(),
    title: 'The Thin Red Line',
    author: 'James Jones',
  },
  {
    id: uuidv4(),
    title: 'The Green Mile',
    author: 'Stephen King',
  },
  {
    id: uuidv4(),
    title: 'Cowboy Bebop',
    author: 'Hajime Yatate',
  },
];

// Reducer
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case CREATE:
      return [...state, action.book];

    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);

    default:
      return state;
  }
}

// Action Creators
export const createBooks = (title, author) => ({
  type: CREATE,
  book: { id: uuidv4(), title, author },
});
export const removeBooks = (book) => ({ type: REMOVE, book });
