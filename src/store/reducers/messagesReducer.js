import { ADD_MESSAGE } from "../actions/actions";

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
                console.log(currentList);
                return {
                    ...state,
                    messageList: {
                        ...state.messageList,
                        [action.chatId]: [
                            ...currentList,
                            {
                                ...action.message,
                                id: `${action.chatId}${currentList.length}`,
                            },
                        ],
                    },
                };
            }
            default:
                return state;
        }
    };

export default messagesReducer;


// const messages = 
//     {friend: [
//         {text:"First Message", author: 'User'}
//     ], 
//     happy: [
//         {text:"Second Message", author: 'User'},
//         {text:"Reply", author: 'Bot James'}
//     ],
//     lucky: [    
//     ]};

// console.log(messages);


// export const messagesReducer = (state = messages, action) => {
//     switch (action.type) {
//         case 'RENDERMESAGES':
//           return state;
//         case 'ADDMESAGE':
//             return action.payload;
//         default:
//           return state;
//     }
// }



