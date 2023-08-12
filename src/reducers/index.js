import todoReducer from "./todoReducer";

import { combineReducers } from "redux"; // import to combine reducers
const rootReducer = combineReducers({ // create root reducer obj using multiple reducers
    todoReducer: todoReducer,
    //example1: exampleReducer1,
    //example2: exampleReducer2
});
export default rootReducer;