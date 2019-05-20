import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currencies: [],
    result: 'Result',
    chartData: {}
};

const converter = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_CURRENCIES:
            const fetchedCurrencies = [{currency: 'Currency'}];
            for (let key in action.value) {
                fetchedCurrencies.push({currency: key});
            }
            return {
                ...state,
                currencies: state.currencies.concat(fetchedCurrencies)
            };

        case actionTypes.COUNT_RESULT:
            let amount = action.value.inputs.amount,
                to = action.value.inputs.to,
                rate = action.value.rates[to],
                result = amount * rate;
            return {
                ...state,
                result: result.toFixed(3)
            };

        case actionTypes.MAKE_CHART:
            const chartData = {};
            let currency = action.value.inputs.inputs.to;
            for (let key in action.value.rates) {
                chartData[key] = action.value.rates[key][currency]
            }
            return {
                ...state,
                chartData: chartData
            };

        default: return state;
    }
};

export default converter;