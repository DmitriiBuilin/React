import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: []
  }
  
const persistedReducer = persistReducer(persistConfig, allReducers)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk))
);

// store.subscribe(() => console.log(store.getState()));

export default store;