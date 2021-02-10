import { createStore } from 'redux';
import rootReducer from './redusers/index.js';
const store = createStore(rootReducer);
export default store;