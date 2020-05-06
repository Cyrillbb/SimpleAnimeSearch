
import { TitleFetcher } from './TitleFetcher';
import { GET_TITLE } from '../actions/actions';

describe('fetches an anime title', () => {
    it('returns the initial state', () => {
        expect(TitleFetcher({
            title: {},
            pending: true,
            id: '',
        }, {})).toEqual({
            title: {},
            pending: true,
            id: '',
        })
    })

    it('gets a certain anime title', () => {
        expect(TitleFetcher({
            title: {},
            pending: true,
            id: '',
        }, {
            type: GET_TITLE,
            payload: {
                id: 'id',
                pending: false,
                data: 'data',
            }
        })).toEqual({            
                title: 'data',
                pending: false,
                id: 'id',            
        })
    })
})