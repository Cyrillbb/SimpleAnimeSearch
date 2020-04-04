import { combineReducers } from "redux";
import { fetcher } from './Fetcher';
import { favorite } from './Favorite';


export const rootReducer = combineReducers({
    results: fetcher,
    favorites: favorite,    
})