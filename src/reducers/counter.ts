import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  LOGOUT_USER
} from '../constants';
import { fromJS } from 'immutable';
import { IncrementCounterAction, DecrementCounterAction, OtherAction } from '../actions/counter';


const INITIAL_STATE = fromJS({
  count: 0,
});

type CounterAction =
  IncrementCounterAction |
    DecrementCounterAction |
    OtherAction

function counterReducer(state = INITIAL_STATE, action:CounterAction = OtherAction) {

  switch (action.type) {
    case INCREMENT_COUNTER:
      return state.update('count', (value) => value + action.by);

    case DECREMENT_COUNTER:
      return state.update('count', (value) => value - 1);

    default:
      return state;
  }
}


export default counterReducer;

