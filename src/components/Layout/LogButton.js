import React from 'react';
import clasess from './LogButton.module.css'

function LogButton(props) {
    return (
        <button className={clasess.button}>
            <span> Add A Book</span>
        </button>
    );
}

export default LogButton;