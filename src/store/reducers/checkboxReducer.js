export const checkboxReducer = (state = false, action) => {
  switch (action.type) {
      case 'CHECKED':
        return !state;
      default:
        return state;
    }
}

export default checkboxReducer;
