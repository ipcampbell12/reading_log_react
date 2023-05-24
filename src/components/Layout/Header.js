import { Fragment } from 'react';

import React from 'react';
import bookshelfimage from '../../assets/bookshelfimage.jpg'
import classes from './Header.module.css'

function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Book Log</h1>
            </header>
            <div className={classes['main-image']}>
                <img src={bookshelfimage} alt="A bookshelf" />
            </div>
        </Fragment>
    );
}

export default Header;