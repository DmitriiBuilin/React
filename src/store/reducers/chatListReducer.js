const initialChats = [ 
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
];

export const chatListReducer = (state = initialChats, action) => {
    switch (action.type) {
        // case 'CHATLIST':
        //   return state;
        case 'ADDCHAT':
            return  {
                ...state, name: [...state.name, action.new]}
            
        case 'REMOVECHAT':
            return -1;
        default:
          return state;
      }
  }
  
  export default chatListReducer;