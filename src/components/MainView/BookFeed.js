import React from 'react';
import Card from '../UI/Card';
import classes from './BookFeed.module.css'
import BookItem from './BookItem';

const DUMMY_BOOKS = [
    {
        id: 1,
        title: "Bob's Pretty Good Book",
        author: "Bob B. BillyBob"

    },
    {
        id: 2,
        title: "Joe's Pretty Good Book",
        author: "Joey J. McJoeJoe"

    },
    {
        id: 3,
        title: "Hal's Pretty Good Book",
        author: "Hally H. Halverson"

    },
    {
        id: 4,
        title: "Stella's Pretty Good Book",
        author: "Stella S. Stelynksy"

    }

]

function BookFeed(props) {

    const booksList = DUMMY_BOOKS.map((book) => (
        <BookItem
            key={book.id}
            title={book.title}
            author={book.author}

        />
    ));

    return (
        <div className={classes.books}>
            <Card>
                <ul>{booksList}</ul>
            </Card>
        </div>
    );
}

export default BookFeed;