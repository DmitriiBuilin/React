export const chatsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADDCHAT':
          return 1;
        case 'REMOVECHAT':
          return -1;
        default:
          return state;
      }
  }
  
  export default chatsReducer;