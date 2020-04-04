
import { TOGGLE_FAVORITE, GET_LOCAL_STR } from './../actions/actions';

const initialState = {
    favIds: [],
    favs: []
}

export const favorite = (state = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITE):
            if (state.favIds.indexOf(action.payload.id) === -1) {
                return {
                    favIds: [...state.favIds, action.payload.id],
                    favs: [...state.favs, action.payload.item]
                }
            }
            else {
                return {
                    favIds: state.favIds.filter(id => id !== action.payload.id),
                    favs: state.favs.filter(item => item.id !== action.payload.id)
                }
            }
        case (GET_LOCAL_STR):
            return (
                {
                    favsIds: action.payload.favIds,
                    favs: action.payload.favs
                }
            )
        default:
            return state
    }
}