import { SET_CITY } from './../actions';

export const city = (state = {}, action) =>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SET_CITY:
                return action.payload;
        default:
                return state;
    }
}