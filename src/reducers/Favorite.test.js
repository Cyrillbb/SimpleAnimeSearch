
import { favorite } from './Favorite';
import { toggleFav } from '../actions/actions';

describe('handles favorites', () => {
    it('returns initial state', () => {
        expect(favorite(undefined, {})).toEqual([])
    })

    it('toggles favorites', () => {
        expect(favorite(undefined, toggleFav('1', '1', []))).toEqual(['1'])
    })
})