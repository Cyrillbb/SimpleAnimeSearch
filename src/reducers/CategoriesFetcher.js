import { GET_CATEGORIES } from "../actions/actions";

const initialState = [];

export const CategoriesFetcher = (state = initialState, action) => {
    switch (action.type) {
        case (GET_CATEGORIES):
            return (
                action.payload
            )
        default:
            return state
    }
};