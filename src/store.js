import {createStore} from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer); //create store

export default store;