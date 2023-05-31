import React from 'react';

const LogContext = React.createContext({
    books: [],
    bookCount: 0,
    addBook: (book) => { },
    removeBook: (id) => { },
    updateBook: (id) => { },
    clearLog: () => { }
});

export default LogContext;

// in the context file include the data you are going to keep track of and the meethods you will have to update that date