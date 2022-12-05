const initialChats = [ 
  { 
      name:"Friend Chat", 
      id: 'friend', 
      MessageList: [{text:"First Message", author: 'User'}], 
  }, 
  { 
      name:"Happy Chat",
      id: 'happy',  
      MessageList: [
          {text:"Second Message", author: 'User'},
          {text:"Reply", author: 'Bot James'}
      ],
  }, 
  {
      name:"Lucky Chat",
      id: 'lucky', 
      MessageList: [],
  } 
];

export const chatListReducer = (state = initialChats, action) => {
    switch (action.type) {
        // case 'CHATLIST':
        //   return state;
        default:
          return state;
      }
  }
  
  export default chatListReducer;