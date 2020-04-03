import { GET_BY_NAME, GET_MOST_POP, GET_TOP_AIR, GET_TOP_RATED } from "../actions/actions"

const initialState = []

export const fetcher = (state = initialState, action) => {
    switch(action.type) {
        case(GET_BY_NAME): 
        return (
            action.payload
        )
        case(GET_MOST_POP):
        return (
            action.payload
        )
        case(GET_TOP_AIR):
        return (
            action.payload
        )
        case(GET_TOP_RATED):
        return (
            action.payload
        )
        default: 
        return state
    }
}