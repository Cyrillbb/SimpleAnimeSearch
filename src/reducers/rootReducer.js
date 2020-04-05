import { combineReducers } from "redux";
import { fetcher } from './Fetcher';
import { favorite } from './Favorite';
import { CategoriesFetcher } from './CategoriesFetcher';
import { TitleFetcher } from './TitleFetcher';


export const rootReducer = combineReducers({
    results: fetcher,
    favorites: favorite,
    categories: CategoriesFetcher,
    title: TitleFetcher    
})