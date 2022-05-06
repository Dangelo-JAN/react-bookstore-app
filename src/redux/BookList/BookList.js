// Action Types
const POST = 'react-bookstore-app/books/POST';
const DELETE = 'react-bookstore-app/books/DELETE';
const GET = 'react-bookstore-app/books/GET';
const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/V1BuxYOEwLDS3YbjxTWY/books';
const initialState = [];

const sortByTitle = (a, b) => {
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return -1;
};

export const sortBooks = (books) => books.sort(sortByTitle);

// Reducer
export default function booksReducer(state = initialState, action) {
  const books = [...state, action.payload];
  switch (action.type) {
    case GET:
      return action.payload;

    case POST:
      return sortBooks(books);

    case DELETE:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
}

// calls
const fetchBooks = async () => {
  const result = await fetch(baseURL);
  const data = await result.json();
  return data;
};

const postBook = async (book) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: 'General',
    }),
  });
  const data = await response.text();
  return data;
};

const deleteBook = async (id) => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const data = await response.text();
  return data;
};

// Action Creators
export const getBooks = () => async (dispatch) => {
  const result = await fetchBooks();
  const books = Object.entries(result).map(([itemId, [book]]) => ({
    id: itemId,
    title: book.title,
    author: book.author,
    category: book.category,
  }));
  dispatch({
    type: GET,
    payload: sortBooks(books),
  });
};

export const createBook = (payload) => async (dispatch) => {
  await postBook(payload);
  dispatch({
    type: POST,
    payload,
  });
};

export const removeBooks = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({
    type: DELETE,
    payload,
  });
};
