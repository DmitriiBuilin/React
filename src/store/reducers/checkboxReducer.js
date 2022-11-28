import { initialState } from "../initialState";

export const checkboxReducer = (state = initialState, action) => {
    // const { type, payload } = action;

    switch (action.type) {
      case 'CHECKED':
        return {
            ...state,
            checkBox: ''
        }
  
      default:
        return state
    }
}