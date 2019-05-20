import React from 'react';
import {connect} from 'react-redux';

import classes from './Output.module.css';

const output = (props) => {
    return (
        <div className={classes.Output}>
            <p>{props.result}</p>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        result: state.result
    };
};

export default connect(mapStateToProps)(output);