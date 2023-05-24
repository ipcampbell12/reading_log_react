import React from 'react';
import Card from '../UI/Card';
import StatItem from './StatItem'
import classes from './Stats.module.css'

const DUMMY_STATS = [

    {
        id: 1,
        name: 'Total Authors',
        value: 4
    },
    {
        id: 2,
        name: 'Total Books',
        value: 4
    }
]


function Stats(props) {
    const statsList = DUMMY_STATS.map((stat) => (
        <StatItem
            key={stat.id}
            name={stat.name}
            value={stat.value}

        />
    ));

    return (
        <div className={classes.stats}>

            <Card>
                <h3>Stats</h3>
                <ul>{statsList}</ul>
            </Card>
        </div>
    );
}

export default Stats;