export const CHECKED =  { type: 'CHECKED' }
export const INCREASE = {type: 'INCREASE'}
export const DECREASE = {type: 'DECREASE'}
export const CHATSELECTOR = {type: 'CHATSELECTOR'}
export const RENDERMESAGES = {type: 'RENDERMESAGES'}
export const TOGGLESHOWNAME = {type: 'TOGGLESHOWNAME'}

export const CHANGENAME = 'PROFILE::CHANGENAME';
export const changeName = (newName) => ({
    type: CHANGENAME,
    payload: newName,
});

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const addChat = (name) => ({
    type: ADD_CHAT, payload: name, 
});

export const DEL_CHAT = 'CHATS::DEL_CHAT';
export const delChat = (chatId) => ({
    type: DEL_CHAT, payload: chatId,
})

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});

export const ADD_EMPTY_VALUE = 'MESSAGES::ADD_EMPTY_VALUE'
export const addEmptyValue = (chatId) => ({
    type: ADD_EMPTY_VALUE,
    chatId,
});
