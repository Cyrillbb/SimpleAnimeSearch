import { queryParts, fetchHeader, apiEND } from './../constants';
import { saveFavsToServ } from '../utility';

export const GET_MORE = 'GET_MORE';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const GET_FAV = 'GET_FAV';
export const GET_ANIME = 'GET_ANIME';
export const GET_TITLE = 'GET_TITLE';
export const GET_LOCAL_STR = 'GET_LOCAL_STR';

export const getAnime = (query) => {
    const url = queryParts.apiURL + query + apiEND;
    return async dispatch => {
        dispatch({
            type: GET_ANIME,
            payload: {
                data: [],
                url: '',
                pending: true
            }
        })
        try {
            const response = await fetch(url, fetchHeader);
            const json = await response.json();
            dispatch({
                type: GET_ANIME,
                payload: {
                    data: json.data,
                    url: url,
                    pending: false,
                    offset: queryParts.resultsNum,
                }
            })
        }
        catch (e) {
            console.error(e);
        }
    }
};

export const getMore = (url, offset) => {
    return async dispatch => {
        dispatch({
            type: GET_MORE,
            payload: {
                data: [],
                url: '',
                pendingMore: true
            }
        })
        try {
            const response = await fetch(url + queryParts.pageOff + offset, fetchHeader);
            const json = await response.json();
            dispatch({
                type: GET_MORE,
                payload: {
                    data: json.data,
                    url: url,
                    pendingMore: false,
                    offset: offset + queryParts.resultsNum
                }
            })
        }
        catch (e) { console.error(e) };
    }
};

export const toggleFav = (item, token, favs) => {
    const newFavs = favs;
    if (!favs.find(i => i.id === item.id)) {
        newFavs.push(item);
        saveFavsToServ(token, newFavs);
        return {
            type: TOGGLE_FAVORITE,
            payload: newFavs
        }
    }
    else {
        saveFavsToServ(token, newFavs.filter(i => i.id !== item.id));
        return {
            type: TOGGLE_FAVORITE,
            payload: newFavs.filter(i => i.id !== item.id)
        }
    }
};

export const getLocalStr = () => {
    return {
        type: GET_LOCAL_STR,
        payload: {
            favs: JSON.parse(localStorage.getItem('favs'))
        }
    }
};

export const getCateg = () => {
    return async dispatch => {
        try {
            const response = await fetch(queryParts.categories, fetchHeader);
            const json = await response.json();
            dispatch({
                type: GET_CATEGORIES,
                payload: json.data
            })
        }
        catch (e) {
            console.error(e)
        }
    }
};

export const getTitle = (id) => {
    return async dispatch => {
        dispatch({
            type: GET_TITLE,
            payload: {
                id: id,
                pending: true,
                data: {},
            }
        })
        try {
            const response = await fetch(queryParts.apiURL + queryParts.idSearch + id + queryParts.filter + queryParts.youtFilter, fetchHeader);
            const json = await response.json();
            dispatch({
                type: GET_TITLE,
                payload: {
                    id: id,
                    pending: false,
                    data: json.data[0],
                }
            })
        }
        catch (e) {
            throw new Error(e);
        }
    }
};