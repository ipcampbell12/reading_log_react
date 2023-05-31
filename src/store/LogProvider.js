import { useReducer } from 'react';
import LogContext from "./log-context";


//instatiate default context state (i.e. empty)

const defaultLogState = {
    books: []
}

function logReducer(books, action) {
    switch (action.type) {
        case 'ADD': {
            return [
                ...books, {
                    id: action.id,
                    title: action.title,
                    author: action.author,
                    read: false
                }];
        } case 'UPDATE': {
            return books.map(book => {
                if (book.id === action.book.id) {
                    return action.book;
                } else {
                    return book;
                }
            });
        } case 'DELETE': {
            return books.filter(book => book.id !== action.id)
        } case 'CLEAR': {
            return defaultLogState
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const LogProvider = (props) => {
    const [logState, dispatchLogAction] = useReducer(
        logReducer,
        defaultLogState
    );

    const addBookToLogHandler = (book) => {
        dispatchLogAction({ type: 'ADD', book: book });
    };


    const removeBookFromLogHandler = (id) => {
        dispatchLogAction({ type: 'REMOVE', id: id });
    };

    const updateBookInLogHandler = (id) => {
        dispatchLogAction({ type: 'REMOVE', id: id });
    };


    const clearLogHandler = () => {
        dispatchLogAction({ type: 'CLEAR' });
    };

    const logContext = {
        books: logState.books,
        addBook: addBookToLogHandler,
        removeBook: removeBookFromLogHandler,
        updateBook: updateBookInLogHandler,
        clearLog: clearLogHandler
    };

    return (
        <LogContext.Provider value={logContext}>
            {props.children}
        </LogContext.Provider>
    );
};

export default LogProvider;