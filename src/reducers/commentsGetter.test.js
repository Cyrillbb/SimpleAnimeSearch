import { commentsGetter } from './commentsGetter';
import { GET_COMMENTS } from './../actions/myApiActions';

describe('gets comments', () => {
    it('returns default state', () => {
        expect(commentsGetter(undefined, {})).toEqual([])
    })
    it('gets comments', () => {
        expect(commentsGetter(undefined, {type: GET_COMMENTS, payload: [1]})).toEqual([1])
    })
})