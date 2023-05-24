import React from 'react';
import Card from '../UI/Card';
import classes from './BookFeed.module.css'

const booksList = [
    {
        id: 1,
        book: "Bob's Pretty Good Book",
        author: "Bob B. BillyBob"

    },
    {
        id: 2,
        book: "Joe's Pretty Good Book",
        author: "Joey J. McJoeJoe"

    },
    {
        id: 3,
        book: "Hal's Pretty Good Book",
        author: "Hally H. Halverson"

    },
    {
        id: 4,
        book: "Stella's Pretty Good Book",
        author: "Stella S. Stelynksy"

    }

]

function Dashboard(props) {
    return (
        <div className={classes.books}>
            <Card>
                <ul>{booksList}</ul>
            </Card>
        </div>
    );
}

export default Dashboard;