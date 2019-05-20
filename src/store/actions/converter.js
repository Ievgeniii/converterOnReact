import * as actionTypes from './actionTypes';
import axios from '../../ajax/base';

export const getCurrencies = () => {
    return dispatch => {
        axios.get('/latest')
            .then(res => {
                dispatch(getCurrenciesSend(res.data.rates));
            })
    };
};

export const getCurrenciesSend = (currencies) => {
    return {
        type: actionTypes.GET_CURRENCIES,
        value: currencies
    }
};

export const countResult = (inputsData) => {
    return dispatch => {
        axios.get(`latest?base=${inputsData.from}`)
            .then(res => {
                dispatch(countResultSend({inputs: inputsData, rates: res.data.rates}));
            })
    }
};

export const countResultSend =(data) => {
    return {
        type: actionTypes.COUNT_RESULT,
        value: data
    }
};

export const makeChart = (data) => {
    return dispatch => {
        axios.get(`history?start_at=${data.startDate}&end_at=${data.endDate}&base=${data.inputs.from}`)
            .then(res => {
                dispatch(makeChartSend({inputs: data, rates: res.data.rates}));
            })
    }
};

export const makeChartSend =(data) => {
    return {
        type: actionTypes.MAKE_CHART,
        value: data
    }
};

