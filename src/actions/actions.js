import { queryParts, fetchHeader, apiEND } from './../constants';

export const GET_MORE = 'GET_MORE'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const GET_FAV = 'GET_FAV'
export const GET_ANIME = 'GET_ANIME'
export const GET_TITLE = 'GET_TITLE'
export const GET_LOCAL_STR = 'GET_LOCAL_STR'

export const getAnime = (query) => {
    const url = queryParts.apiURL + query + apiEND
    return dispatch => {
        dispatch({
            type: GET_ANIME,
            payload: {
                data: [],
                url: '',
                pending: true
            }
        })
        fetch(url, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_ANIME,
                payload: {
                    data: json.data,
                    url: url,
                    pending: false
                }
            }))
    }
}

export const getMore = (url, offset) => {
    return dispatch => {
        dispatch({
            type: GET_MORE,
            payload: {
                data: [],
                url: '',
                pendingMore: true
            }
        })
        fetch(url + queryParts.pageOff + offset, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_MORE,
                payload: {
                    data: json.data,
                    url: url,
                    pendingMore: false
                }
            }))
    }
}

export const toggleFav = (id, item) => {
    return {
        type: TOGGLE_FAVORITE,
        payload: {
            id: id,
            item: item
        }
    }
}

export const getLocalStr = () => {
    return {
        type: GET_LOCAL_STR,
        payload: {
            favIds: JSON.parse(localStorage.getItem('ids')),
            favs: JSON.parse(localStorage.getItem('favs'))
        }
    }
}

export const getCateg = () => {
    return dispatch => {
        fetch(queryParts.categories)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_CATEGORIES,
                payload: json.data
            }))
    }
}

export const getTitle = (id) => {
    return dispatch => {
        dispatch({
            type: GET_TITLE,
            payload: {
                id: id,
                pending: true,
                data: {},
            }
        })
        fetch(queryParts.apiURL + queryParts.idSearch + id + queryParts.filter)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_TITLE,
                payload: {
                    id: id,
                    pending: false,
                    data: json.data[0],
                }
            }))
    }
}