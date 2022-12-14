export const getProfileName = (state) => {
    return state.profile.name
    };

export const getChatList = (state) => {
    return state.chatList.chatList
    };

export const getMessagesList = (state) => {
    return state.messages.messageList
    };

export const getChatSwitcher = (state) => {
        return state.switchChat
        };
