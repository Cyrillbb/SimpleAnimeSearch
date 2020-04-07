import { GET_TITLE } from "../actions/actions"

const initialState = {
    title: {},
    pending: true,
    id: '',
}

export const TitleFetcher = (state = initialState, action) => {
    switch(action.type) {
        case(GET_TITLE):
        return (            
                 {
                     id: action.payload.id,
                     pending: action.payload.pending,
                     title: action.payload.data
                 }            
        )
        default:
            return state
    }
}