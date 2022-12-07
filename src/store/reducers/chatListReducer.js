// const initialChats = [ 
//   { 
//       name: 'Friend Chat', 
//       id: 'friend'
//   }, 
//   { 
//       name: 'Happy Chat',
//       id: 'happy'
//   }, 
//   {
//       name: 'Lucky Chat',
//       id: 'lucky'
//   }, 
// ];

const initialChats = {
    chatList: [
        { 
            name: 'Friend Chat', 
            id: 'friend'
        }, 
        { 
            name: 'Happy Chat',
            id: 'happy'
        }, 
        {
            name: 'Lucky Chat',
            id: 'lucky'
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
                        id: `id${state.chatList.length}`,
                        name: action.name,
                    },
                ],
            }            
        // case 'REMOVECHAT':
        //     return -1;
        default:
          return state;
      }
  }
  
  export default chatListReducer;