import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER
} from '../constants';

import {IncrementCounterAction, DecrementCounterAction, OtherAction} from '../actions/counter';
import initialState from './initialState';


type CounterAction =
    IncrementCounterAction |
        DecrementCounterAction |
        OtherAction

function counterReducer(state = initialState.count, action: CounterAction = OtherAction) {

    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + action.by;

        case DECREMENT_COUNTER:
            return state - 1;

        default:
            return state;
    }
}


export default counterReducer;

