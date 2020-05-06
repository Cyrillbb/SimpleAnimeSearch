
import { CategoriesFetcher } from './CategoriesFetcher';
import { GET_CATEGORIES } from '../actions/actions';

describe('categories fetcher', () => {
    it('should return the initial state', () => {
        expect(CategoriesFetcher(undefined, {})).toEqual([])
    })

    it('should return fetched categories', () => {
        expect(CategoriesFetcher([], {
            type: GET_CATEGORIES,
            payload: [1]
        })).toEqual([1])
    })
})