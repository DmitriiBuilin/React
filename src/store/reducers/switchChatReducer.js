export const switchReducer = (state = null, action) => {
    switch (action.type) {
        case 'CHATSELECTOR':
          return action.payload;
        default:
          return state;
      }
  }

  export default switchReducer;