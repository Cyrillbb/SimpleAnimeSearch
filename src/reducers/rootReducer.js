import { combineReducers } from "redux";
import { fetcher } from './Fetcher';
import { favorite } from './Favorite';
import { CategoriesFetcher } from './CategoriesFetcher';
import { TitleFetcher } from './TitleFetcher';
import { tokenGetter } from './TokenGetter';
import { userNameGetter } from './userNameGetter';
import { commentsGetter } from './commentsGetter';


export const rootReducer = combineReducers({
    results: fetcher,
    favorites: favorite,
    categories: CategoriesFetcher,
    title: TitleFetcher,
    token: tokenGetter,
    userName: userNameGetter,
    comments: commentsGetter,
});