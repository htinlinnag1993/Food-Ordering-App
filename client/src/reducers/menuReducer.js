import { FETCH_MENU} from '../actions/types';

const initialState = {
    name: null,
    menuItems: []
};

export default function(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_MENU:
            return action.payload || false; 
        default:
            return state;
    }
};