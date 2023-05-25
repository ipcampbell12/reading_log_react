import React from 'react';
import Card from '../UI/Card';
import classes from './BookFeed.module.css'
import BookItem from './BookItem';

const DUMMY_BOOKS = [
    {
        id: 1,
        title: "Bob's Pretty Good Book",
        author: "Bob B. BillyBob",
        genre: 'Self Help',
        fictionNonfiction: 'Non Fiction',
        summary: 'This book is blah blah blah'

    },
    {
        id: 2,
        title: "Joe's Pretty Good Book",
        author: "Joey J. McJoeJoe",
        genre: 'Biography',
        fictionNonfiction: 'Non Fiction',
        summary: 'This book is blah blah blah'

    },
    {
        id: 3,
        title: "Hal's Pretty Good Book",
        author: "Hally H. Halverson",
        genre: 'Fantasy',
        fictionNonfiction: 'Fiction',
        summary: 'This book is blah blah blah'

    },
    {
        id: 4,
        title: "Stella's Pretty Good Book",
        author: "Stella S. Stelynksy",
        genre: 'Cooking',
        fictionNonfiction: 'Non Fiction',
        summary: 'This book is blah blah blah'

    }

]

function BookFeed(props) {

    const booksList = DUMMY_BOOKS.map((book) => (
        <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            fictionNonfiction={book.fictionNonfiction}
            summary={book.summary}
        />
    ));

    return (
        <div className={classes.books}>

            <Card>
                <h3>Reading Log Feed</h3>
                <ul>{booksList}</ul>
            </Card>
        </div>
    );
}

export default BookFeed;