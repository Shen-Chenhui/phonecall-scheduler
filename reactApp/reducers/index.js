import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import timeReducer from './timeReducer';
// import ifOpenReducer from './ifOpenReducer';

const rootReducer = combineReducers({
    time: timeReducer,
    // ifOpen: ifOpenReducer,
    routing: routerReducer
});

export default rootReducer;
