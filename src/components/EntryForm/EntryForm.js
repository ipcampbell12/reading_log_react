import React from 'react';

import Modal from '../UI/Modal';
import classes from './EntryForm.module.css'

function EntryForm(props) {

    const submitEntry = () => {

    }
    return (
        <Modal>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
            </div>
            <form className={classes.form} onSumbit={submitEntry}>
                <div className={classes.control}>
                    <label htmlFor='title'>Title</label>
                    <input type="text" id="title" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='author'>Author</label>
                    <input type="text" id="author" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='genre'> Genre</label>
                    <input type="text" id="genre" />
                </div>
                <div className={classes.control}>
                    <label htmlFor='fiction-nonfiction'>Fiction/Non Fiction</label>
                    <select name="Fiction/Nonfiction" id="fiction-nonfiction">
                        <option value="fiction">Fiction</option>
                        <option value="nonfiction">Non Fiction</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='summary'>Summary</label>
                    <textarea name="Summary" id="summary" row="4" col="50">
                    </textarea>
                </div>
                <div className={classes.action}>
                    <buttom type='button' onClick={props.onCancel}>
                        Cancel
                    </buttom>
                    <br />
                    <button type='button' classname={classes.confirm}> Submit</button>
                </div>


            </form>

        </Modal>
    );
}

export default EntryForm;