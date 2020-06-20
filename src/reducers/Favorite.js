
import { TOGGLE_FAVORITE, GET_LOCAL_STR } from './../actions/actions';

const initialState = {    
    favs: []
}

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITE):
            if (state.favs.find(i => i.id === action.payload.item.id) === undefined) {
                return {                   
                    favs: [...state.favs, action.payload.item]
                }
            }
            else {
                return {                    
                    favs: state.favs.filter(item => item.id !== action.payload.item.id)
                }
            }
        case (GET_LOCAL_STR):
            return (
                {                    
                    favs: action.payload.favs
                }
            )
        default:
            return state
    }
}