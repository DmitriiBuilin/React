import { combineReducers } from "redux";
import checkboxReducer from "./checkboxReducer";
import countReducer from "./countReducer";


const allReducers = combineReducers ({
    chekBox: checkboxReducer,
    count: countReducer
});

export default allReducers;