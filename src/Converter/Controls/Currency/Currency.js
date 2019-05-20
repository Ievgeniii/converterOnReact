import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './Currency.module.css';

class Currency extends Component {

    render() {
        return (
            <div className={classes.Currency}>
                <select onChange={this.props.changed} name={this.props.name}>
                    {this.props.curAndRates.map(el => {
                        return <option value={el.currency} key={el.currency}>{el.currency}</option>
                    })}
                </select>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        curAndRates: state.currencies
    };
};

export default connect(mapStateToProps)(Currency);