import { GET_MORE, GET_ANIME } from "../actions/actions"

const initialState = {
    url: '',
    loadedData: [],
    penging: true,
    pendingMore: false,
}

export const fetcher = (state = initialState, action) => {
    switch (action.type) {
        case (GET_ANIME):
            return (
                {
                    url: action.payload.url,
                    loadedData: action.payload.data,
                    pending: action.payload.pending
                }
            )
        case (GET_MORE):
            return (
                {
                    url: action.payload.url,
                    loadedData: state.loadedData.concat(action.payload.data),
                    pendingMore: action.payload.pendingMore
                }
            )
        default:
            return state
    }
}