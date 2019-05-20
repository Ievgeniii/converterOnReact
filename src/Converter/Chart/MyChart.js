import React from 'react';
import {connect} from 'react-redux';

import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);

const myChart = (props) => {
    return <LineChart data={props.chartData} colors={["#72a7ff", "#666"]}/>;
};

const mapStateToProps = state => {
    return {
        chartData: state.chartData
    };
};

export default connect(mapStateToProps)(myChart);