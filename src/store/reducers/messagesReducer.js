    import { ADD_EMPTY_VALUE, ADD_MESSAGE } from "../actions/actions";

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}
    messageList: {
        '0': [
            {text:"First Message", author: 'User'}
        ], 
        '1': [
            {text:"Second Message", author: 'User'},
            {text:"Reply", author: 'Bot James'}
        ],
        '2': [    
        ]
    },
    };

    const messagesReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_MESSAGE: {
                const currentList = state.messageList[action.chatId] || [];
                return {
                    ...state,
                    messageList: {
                        ...state.messageList,
                        [action.chatId]: [
                            ...currentList,
                            {
                                ...action.message,
                            },
                        ],
                    },
                };
            }
            case ADD_EMPTY_VALUE: {
                return {
                    ...state,
                    messageList: {
                        ...state.messageList,
                        [action.chatId]: [],
                    },
                };
            }
            default:
                return state;
        }
    };

export default messagesReducer;
