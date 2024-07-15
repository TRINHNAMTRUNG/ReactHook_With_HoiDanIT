import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    counter2: counterReducer,
});
console.log("rootReducer: ", rootReducer)
export default rootReducer;