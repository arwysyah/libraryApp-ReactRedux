import  {combineReducers} from 'redux'


import {getBooks} from  './books';
import {getByID} from './books'  // setelah getall maka import get by id
import {postBook} from './books'
import {putBook} from './books'
import {deleteBook} from './books'
const appReducer = combineReducers(
    {
        getBooks,
        getByID,
        postBook,
        putBook,
        deleteBook//seharusnya itu books : books dimana book yg kedua meruapakan value namun karena sama satu saja yang tulis
    }
);
export default appReducer;