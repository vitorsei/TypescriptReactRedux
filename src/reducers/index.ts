import { combineReducers } from 'redux';
const { routerReducer } = require('react-router-redux');
const formReducer = require('redux-form').reducer;
import counter from './counterReducer';
import session from './sessionReducer';

const rootReducer = combineReducers({
  session,
  counter,
  routing: routerReducer,
  form: formReducer,
});

export default rootReducer;
