
import { TOGGLE_FAVORITE } from './../actions/actions';

const initialState = [];

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITE):
            if (state.indexOf(action.payload) === -1) {
                return [...state, action.payload]
            }
            else {
                return state.filter(item => item !== action.payload)
            }
        default:
            return state
    }
}