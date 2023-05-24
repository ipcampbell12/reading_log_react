import { Fragment } from 'react';

import React from 'react';
import bookshelfimage from '../../assets/bookshelfimage.jpg'
import classes from './Header.module.css'
import LogButton from './LogButton';


function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Book Log</h1>
                <LogButton />
            </header>

            <div className={classes['main-image']}>
                <img src={bookshelfimage} alt="A bookshelf" />
            </div>
        </Fragment>
    );
}

export default Header;