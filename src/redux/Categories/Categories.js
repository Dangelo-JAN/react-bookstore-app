const CHECK_STATUS = 'react-bookstore-app/categories/CHECK_STATUS';
const initialState = [];

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case CHECK_STATUS:
      return 'Under construction';

    default:
      return state;
  }
}

// Action Creators
export const checkStatusCategories = (categories) => ({ type: CHECK_STATUS, categories });
