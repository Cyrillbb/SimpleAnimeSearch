
import { errorHandler } from './ErrorHandler';
import { GET_ERROR } from './../actions/myApiActions';

describe('handles server response errors', () => {
    it('returns default state', () => {
        expect(errorHandler(undefined, {})).toEqual('')
    })
    it('gets an error msg from server response', () => {
        expect(errorHandler(undefined, {type: GET_ERROR, payload: 'error'})).toEqual('error')
    })
})