
import { TOGGLE_FAVORITE } from './../actions/actions';
import { GET_FAVORITES } from '../actions/myApiActions';

const initialState = [];

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITE): return action.payload;
        case (GET_FAVORITES): return action.payload;
        default:
            return state;
    }
};