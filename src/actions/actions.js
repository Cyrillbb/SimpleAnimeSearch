import { queryParts, fetchHeader, apiEND } from './../constants';

export const GET_MORE = 'GET_MORE'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const GET_ANIME = 'GET_ANIME'


export const getAnime = (query) => {
    const url = queryParts.apiURL + query + apiEND
    return dispatch => {
        fetch(url, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_ANIME,
                payload: {
                    data: json.data,
                    url: url
                }
            }))
    }
}

export const getMore = (url, offset) => {
    return dispatch => {
        fetch(url + queryParts.pageOff + offset, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_MORE,
                payload: {
                    data: json.data,
                    url: url
                }
            }))
    }
}

export const toggleFav = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: id
    }
}