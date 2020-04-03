import { queryParts } from './../constants';

export const GET_BY_NAME = 'GET_BY_NAME'
export const GET_TOP_RATED = 'GET_TOP_RATED'
export const GET_MOST_POP = 'GET_MOST_POP'
export const GET_TOP_AIR = 'GET_TOP_AIR'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const TOGGLE_FAVORITE ='TOGGLE_FAVORITE'

export const nameSearch = (name) => {
    return dispatch => {
        fetch(queryParts.apiURL + queryParts.nameSearch + name + queryParts.pageLim + queryParts.resultsNum + queryParts.pageOff + queryParts.filter, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            }
        })
        .then(data => data.json())
        .then(json => dispatch({
            type:GET_BY_NAME,
            payload: json.data
        }))
    }
}

export const getMostPop = () => {
    return dispatch => {
        fetch(queryParts.apiURL + queryParts.mostPop + queryParts.pageOff + queryParts.resultsNum + queryParts.pageOff + queryParts.filter, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            }
        })
        .then(data => data.json())
        .then(json => dispatch({
            type: GET_MOST_POP,
            payload: json.data
        }))
    }
}

export const getTopRate = () => {
    return dispatch => {
        fetch(queryParts.apiURL + queryParts.topRated + queryParts.pageOff + queryParts.resultsNum + queryParts.pageOff + queryParts.filter, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            }
        })
        .then(data => data.json())
        .then(json => dispatch({
            type: GET_TOP_RATED,
            payload: json.data
        }))
    }
}

export const getTopAir = () => {
    return dispatch => {
        fetch(queryParts.apiURL + queryParts.topAir + queryParts.pageOff + queryParts.resultsNum + queryParts.pageOff + queryParts.filter, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
            }
        })
        .then(data => data.json())
        .then(json => dispatch({
            type: GET_TOP_AIR,
            payload: json.data
        }))
    }
}

