const initialState = {
    showName: false,
    name: 'Default'
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLESHOWNAME':
             return {
                ...state,
                showName: !state.showName
            }
        case 'PROFILE::CHANGENAME':
            return {
                ...state,
                name: action.payload
            }
        default:
            return state
}};

export default profileReducer;