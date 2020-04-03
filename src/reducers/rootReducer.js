import { combineReducers } from "redux";
import { fetcher } from './Fetcher';


export const rootReducer = combineReducers({
    results: fetcher    
})