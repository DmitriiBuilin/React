const initialChats = {
    chatList: [
        { 
            name: 'Friend Chat', 
            id: '0'
        }, 
        { 
            name: 'Happy Chat',
            id: '1'
        }, 
        {
            name: 'Lucky Chat',
            id: '2'
        },

    ],
};

export const chatListReducer = (state = initialChats, action) => {
    switch (action.type) {
        case 'CHATS::ADD_CHAT':
            return  {
                ...state, 
                chatList: [
                    ...state.chatList,
                    {
                        id: `${state.chatList.length}`,
                        name: action.payload,
                    },
                ],
            }            
        case 'CHATS::DEL_CHAT':
            return state.filter((item) => item.chatId !== action.payload)
            
        default:
          return state;
      }
  }
  
  export default chatListReducer;