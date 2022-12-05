import { combineReducers } from "redux";
import chatListReducer from "./chatListReducer";
import chatsReducer from "./chatsReducer";
import checkboxReducer from "./checkboxReducer";
import countReducer from "./countReducer";


const allReducers = combineReducers ({
    chekBox: checkboxReducer,
    count: countReducer,
    chats: chatsReducer,
    chatList: chatListReducer,
});

export default allReducers;