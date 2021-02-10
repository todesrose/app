import DisplayReducer from './DisplayReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    displayReducer: DisplayReducer,
});
export default rootReducer;