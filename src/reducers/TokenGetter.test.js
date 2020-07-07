import { tokenGetter } from './TokenGetter';
import { getToken } from '../actions/myApiActions';

describe('handles a token', () => {
    it('returns a default state', () => {
        expect(tokenGetter(undefined, {})).toEqual('')
    });
    it('gets a token', () => {
        expect(tokenGetter(undefined, getToken('2'))).toEqual('2')
    });
})