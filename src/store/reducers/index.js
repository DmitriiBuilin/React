import { combineReducers } from "redux";
import chatListReducer from "./chatListReducer";
import chatsReducer from "./chatsReducer";
import checkboxReducer from "./checkboxReducer";
import countReducer from "./countReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import switchReducer from "./switchChatReducer";


const allReducers = combineReducers ({
    chekBox: checkboxReducer,
    count: countReducer,
    chats: chatsReducer,
    chatList: chatListReducer,
    messages: messagesReducer,
    switchChat: switchReducer,
    profile: profileReducer,
});

export default allReducers;