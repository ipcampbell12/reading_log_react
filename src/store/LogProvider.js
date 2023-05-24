import { useReducer } from 'react';
import LogContext from "./log-context";


//instatiate default context state (i.e. empty)


function logReducer(books, action) {
    switch (action.type) {
        case 'bookAdded': {
            return [
                ...books, {
                    id: action.id,
                    title: action.title,
                    author: action.author,
                    read: false
                }];
        } case 'bookUpdated': {
            return books.map(book => {
                if (book.id === action.book.id) {
                    return action.book;
                } else {
                    return book;
                }
            });
        } case 'bookRemoved': {
            return books.filter(book => book.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }





}

function logProvider() {
    logReducer()

}

export default logProvider;