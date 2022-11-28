import { createStore } from "redux";
import { initialState } from "./initialState";
import { checkboxReducer } from "./reducers/checkboxReducer";

export const store = createStore(
    initialState,
    checkboxReducer
);
