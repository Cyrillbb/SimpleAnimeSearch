import { queryParts, fetchHeader } from './../constants';

export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_TOP_RATED = 'GET_TOP_RATED'
export const GET_MOST_POP = 'GET_MOST_POP'
export const GET_TOP_AIR = 'GET_TOP_AIR'
export const GET_MORE = 'GET_MORE'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const nameSearch = (name) => {
    const url = queryParts.apiURL + queryParts.nameSearch + name + queryParts.pageLim + queryParts.resultsNum + queryParts.filter
    return dispatch => {
        fetch(url, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_BY_NAME,
                payload: {
                    data: json.data,
                    url: url
                }
            }))
    }
}

export const getMostPop = () => {
    const url = queryParts.apiURL + queryParts.mostPop + queryParts.pageLim + queryParts.resultsNum + queryParts.filter
    return dispatch => {
        fetch(url, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_MOST_POP,
                payload: {
                    data: json.data,
                    url: url
                }
            }))
    }
}

export const getTopRate = () => {
    const url = queryParts.apiURL + queryParts.topRated + queryParts.pageLim + queryParts.resultsNum + queryParts.filter
    return dispatch => {
        fetch(url, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_TOP_RATED,
                payload: {
                    data: json.data,
                    url: url
                }
            }))
    }
}

export const getTopAir = () => {
    const url = queryParts.apiURL + queryParts.topAir + queryParts.pageLim + queryParts.resultsNum + queryParts.filter
    return dispatch => {
        fetch(url, fetchHeader)
            .then(data => data.json())
            .then(json => dispatch({
                type: GET_TOP_AIR,
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