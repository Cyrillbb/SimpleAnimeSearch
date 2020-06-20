import { myApiEND } from './../constants';

export const GET_TOKEN = "GET_TOKEN"
export const GET_USER_NAME = 'GET_USER_NAME'



export const getToken = (token) => {
    return {
        type: GET_TOKEN,
        payload: token
    }
}

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
            const name = await resp.json()
            dispatch({
                type: GET_USER_NAME,
                payload: name.userName
            })
        }
        catch (err) {
            console.log(new Error(err))
        }
    }
}