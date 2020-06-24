
import { GET_COMMENTS } from './../actions/myApiActions';

const initialState = [];

export const commentsGetter = (state = initialState, action) => {
    switch(action.type) {
        case(GET_COMMENTS): return action.payload
        default: return state
    }
};