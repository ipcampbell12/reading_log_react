import React from 'react';

import Modal from '../UI/Modal';
import classes from './EntryForm.module.css'

function EntryForm(props) {
    return (
        <Modal>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClose={props.onClose}>
                    Close
                </button>
            </div>

        </Modal>
    );
}

export default EntryForm;