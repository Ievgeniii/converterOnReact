import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import classes from './Controls.module.css';
import Input from './Input/Input';
import Currency from './Currency/Currency';
import Output from './Output/Output';


class Controls extends Component{
    state = {
        amount: -1,
        from: '',
        to: ''
    };

    componentDidMount () {
        this.props.getCurrencies();
    }

    getInputsData = (event) => {
        switch (event.target.name) {
            case 'amount':
                this.setState({amount: event.target.value});
                break;
            case 'from':
                this.setState({from: event.target.value});
                break;
            case 'to':
                this.setState({to: event.target.value});
                break;
            default: break
        }

        setTimeout(() => {
            this.checkInputs();
        }, 100);
    };

    checkInputs () {
        if (this.state.amount >= 0 &&
            this.state.from !== '' &&
            this.state.to !== '' &&
            this.state.from !== 'Currency' &&
            this.state.to !== 'Currency') {

            this.props.countResult(this.state);
            this.loadChartData();
        }
    };

    loadChartData () {
        let startDate = new Date();
        startDate.setDate(new Date().getDate()-365);// days before
        let date = startDate.getDate();
        if (date < 10) date = '0' + date;

        let month = startDate.getMonth() + 1;
        if (month < 10) month = '0' + month;

        let year = startDate.getFullYear();

        let currentDate = new Date().getDate();
        if (currentDate < 10) currentDate = '0' + currentDate;

        let currentMonth = new Date().getMonth() + 1;
        if (currentDate < 10) currentMonth = '0' + currentMonth;

        let currentYear = new Date().getFullYear();

        const data = {
            inputs: this.state,
            startDate: `${year}-${month}-${date}`,
            endDate: `${currentYear}-${currentMonth}-${currentDate}`
        };

        this.props.makeChart(data);
    }

    render () {
        return (
            <div className={classes.Controls}>
                <Input changed={this.getInputsData}/>
                <Currency changed={this.getInputsData} name="from"/>
                <Currency changed={this.getInputsData} name="to"/>
                <Output/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrencies: () => dispatch(actionCreators.getCurrencies()),
        countResult: (inputsData) => dispatch(actionCreators.countResult(inputsData)),
        makeChart: (data) => dispatch(actionCreators.makeChart(data)),
    };
};

export default connect(null, mapDispatchToProps)(Controls);