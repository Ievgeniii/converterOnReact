import React from 'react';

import Controls from './Controls/Controls';
import MyChart from './Chart/MyChart'
import classes from './Converter.module.css';

const converter = () => {
    return (
        <React.Fragment>
            <Controls/>
            <div className={classes.MyChart}>
                <MyChart/>
            </div>
        </React.Fragment>
    )
};

export default converter;