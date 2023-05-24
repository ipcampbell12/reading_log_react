import React from 'react';
import classes from './BookItem.module.css'

function BookItem(props) {
    return (
        <li className={classes.book}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.author}>{props.author}</div>
            </div>
        </li>
    );
}

export default BookItem;