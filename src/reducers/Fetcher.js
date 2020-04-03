import { GET_BY_NAME, GET_MOST_POP, GET_TOP_AIR, GET_TOP_RATED, GET_MORE } from "../actions/actions"

const initialState = {
    url: '',
    loadedData: []
}

export const fetcher = (state = initialState, action) => {
    switch (action.type) {
        case (GET_BY_NAME):
            return (
                {
                    url: action.payload.url,
                    loadedData: action.payload.data
                }
            )
        case (GET_MOST_POP):
            return (
                {
                    url: action.payload.url,
                    loadedData: action.payload.data
                }
            )
        case (GET_TOP_AIR):
            return (
                {
                    url: action.payload.url,
                    loadedData: action.payload.data
                }
            )
        case (GET_TOP_RATED):
            return (
                {
                    url: action.payload.url,
                    loadedData: action.payload.data
                }
            )
        case (GET_MORE):
            return (
                {
                    url: action.payload.url,
                    loadedData: state.loadedData.concat(action.payload.data),
                }
            )
        default:
            return state
    }
}