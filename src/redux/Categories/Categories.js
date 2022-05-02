const CREATE = 'react-bookstore-app/categories/CREATE';
const REMOVE = 'react-bookstore-app/categories/REMOVE';
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
const createCategories = categories => ({ type: CREATE, categories });
const removeCategories = categories => ({ type: REMOVE, categories });
