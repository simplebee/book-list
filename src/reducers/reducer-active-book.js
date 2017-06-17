import books from './reducer-books';

const initialState = books()[0];

export default function activeBook(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_BOOK':
      return action.payload;
    default:
      return state;
  }
}