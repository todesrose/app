
export default function DisplayReducer (state = { number: 0 }
    , action) {
    switch(action.type) {
        case 'INCREASE_DISPLAY_NUMBER':
            state.number++;
            return { ...state };
              
        case 'DECREASE_DISPLAY_NUMBER':
            state.number--;
            return { ...state };
        default:
            break;
              
    }
    return state;
}