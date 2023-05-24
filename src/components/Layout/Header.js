import { Fragment } from 'react';

import React from 'react';
import bookshelfimage from '../../assets/bookshelfimage.jpg'

function Header(props) {
    return (
        <Fragment>
            <header>
                <h1>Book Log</h1>
            </header>
            <div>
                <img src={bookshelfimage} alt="A bookshelf" />
            </div>
        </Fragment>
    );
}

export default Header;