import { myApiEND } from './../constants';

export const GET_TOKEN = "GET_TOKEN";
export const GET_USER_NAME = 'GET_USER_NAME';
export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_ERROR = 'GET_ERROR';



export const getToken = (token) => {
    return {
        type: GET_TOKEN,
        payload: token
    }
};

export const getUserByToken = (token) => {
    return async dispatch => {
        try {
            const resp = await fetch(myApiEND + 'loginByToken', {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const name = await resp.json();
            dispatch({
                type: GET_USER_NAME,
                payload: name.userName
            })
        }
        catch (err) {
            console.log(new Error(err));
        }
    }
};

export const getComments = (id) => {
    return async dispatch => {
        try {
            const resp = await fetch(myApiEND + 'getComments/' + id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            const data = await resp.json();
            dispatch({
                type: GET_COMMENTS,
                payload: data.comments
            })
        }
        catch (err) {
            console.log(new Error(err));
        }
    }
};

export const getFavorites = (token) => {
    return async dispatch => {
        try {
            const resp = await fetch(myApiEND + 'getMyFavs', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const favs = await resp.json();
            dispatch({
                type: GET_FAVORITES,
                payload: favs.favs
            })
        }
        catch (err) {
            console.log(new Error(err));
        }
    }
};

export const getError = (msg) => {
    return {
        type: GET_ERROR,
        payload: msg,
    }
};