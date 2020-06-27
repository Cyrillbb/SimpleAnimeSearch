import { GET_ERROR } from "../actions/myApiActions";

const initialState = '';

export const errorHandler = (state = initialState, action) => {
    switch(action.type) {
        case(GET_ERROR): return action.payload;
        default: return state
    }
}