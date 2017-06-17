import {combineReducers} from 'redux';
import books from './reducer-books';
import activeBook from './reducer-active-book';

const rootReducer = combineReducers({
  books: books,
  activeBook: activeBook
});

export default rootReducer;