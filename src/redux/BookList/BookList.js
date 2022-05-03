// Action Types
const CREATE = 'react-bookstore-app/books/CREATE';
const REMOVE = 'react-bookstore-app/books/REMOVE';
const initialState = {};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case CREATE:
      return { ...state, action.createBook };

    case REMOVE:
      return { ...state, action.removeBook };

    default:
      return state;
  }
}

// Action Creators
export const createBooks = (books) => ({ type: CREATE, books });
export const removeBooks = (books) => ({ type: REMOVE, books });
