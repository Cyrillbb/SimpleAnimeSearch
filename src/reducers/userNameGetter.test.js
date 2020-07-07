import { userNameGetter } from './userNameGetter';
import { GET_USER_NAME } from '../actions/myApiActions';

describe('gets username', () => {
    it('returns a default state', () => {
        expect(userNameGetter(undefined, {})).toEqual('')
    });
    it('gets a username', () => {
        expect(userNameGetter(undefined, {type: GET_USER_NAME, payload: '2'})).toEqual('2')
    });
})