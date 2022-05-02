// Action Types
const CREATE = 'react-bookstore-app/books/CREATE';
const REMOVE = 'react-bookstore-app/books/REMOVE';
const initialState = {};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case CREATE:
      return { ...state };

    case REMOVE:
      return { ...state };

    default:
      return state;
  }
}

// Action Creators
const createBooks = books => ({ type: CREATE, books });
const removeBooks = books => ({ type: REMOVE, books });
