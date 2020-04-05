import { GET_TITLE } from "../actions/actions"

const initialState = {}

export const TitleFetcher = (state = initialState, action) => {
    switch(action.type) {
        case(GET_TITLE):
        return (            
                 action.payload            
        )
        default:
            return state
    }
}