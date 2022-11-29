import { createStore } from "redux";
import checkedInput from "./actions/checkboxAction";
import { checkboxReducer } from "./reducers/checkboxReducer";

export const store = createStore(
    checkboxReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));
store.dispatch(checkedInput);
store.dispatch(checkedInput);
store.dispatch(checkedInput);


export default store;