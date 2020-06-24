
import { GET_TOKEN } from './../actions/myApiActions';

const initialState = '';

export const tokenGetter = (state = initialState, action) => {
    switch (action.type) {
        case (GET_TOKEN): return action.payload
        default: return state
    }
};