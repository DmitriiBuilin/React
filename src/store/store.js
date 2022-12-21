import { applyMiddleware} from "@reduxjs/toolkit";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import allReducers from "./reducers";
import storage from 'redux-persist/lib/storage'
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['switchChat']
  }
  
const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(() => console.log(store.getState()));

export const persistor = persistStore(store);
export default store;