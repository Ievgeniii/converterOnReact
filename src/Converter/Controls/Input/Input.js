import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    return (
        <div className={classes.Input}>
            <input
                onChange={props.changed}
                type="number"
                placeholder="Amount"
                min="0"
                name="amount"/>
        </div>
    )
};

export default input;