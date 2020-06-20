
import { TOGGLE_FAVORITE } from './../actions/actions';
import { GET_FAVORITES } from '../actions/myApiActions';

const initialState = []

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITE):
            if (state.find(i => i.id === action.payload.item.id) === undefined) {
                return [...state, action.payload.item]

            }
            else {
                return state.filter(item => item.id !== action.payload.item.id)

            }
            case(GET_FAVORITES): return action.payload
        default:
            return state
    }
}