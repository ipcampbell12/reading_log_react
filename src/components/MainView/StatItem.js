import React from 'react';
import classes from './StatItem.module.css'

function StatItem(props) {

    return (
        <li className={classes.stat}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes['stat-value']}>{props.value}</div>
            </div>
        </li>
    );

}

export default StatItem;