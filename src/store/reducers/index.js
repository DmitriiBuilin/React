import { combineReducers } from "redux";
import chatListReducer from "./chatListReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import switchReducer from "./switchChatReducer";


const allReducers = combineReducers ({
    chatList: chatListReducer,
    messages: messagesReducer,
    switchChat: switchReducer,
    profile: profileReducer,
});

export default allReducers;