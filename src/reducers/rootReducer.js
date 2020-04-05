import { combineReducers } from "redux";
import { fetcher } from './Fetcher';
import { favorite } from './Favorite';
import { CategoriesFetcher } from './CategoriesFetcher';


export const rootReducer = combineReducers({
    results: fetcher,
    favorites: favorite,
    categories: CategoriesFetcher    
})