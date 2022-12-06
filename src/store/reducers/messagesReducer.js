const messages = 
    {friend: [
        {text:"First Message", author: 'User'}
    ], 
    happy: [
        {text:"Second Message", author: 'User'},
        {text:"Reply", author: 'Bot James'}
    ],
    lucky: [    
    ]};

// console.log(messages);


export const messagesReducer = (state = messages, action) => {
    switch (action.type) {
        case 'RENDERMESAGES':
          return state;
        // case 'ADDMESAGE':
        //     return action.payload;
        default:
          return state;
      }
  }

