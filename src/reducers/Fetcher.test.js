
import { fetcher } from './Fetcher';
import { queryParts } from '../constants';
import { GET_ANIME } from '../actions/actions';
import { GET_MORE } from './../actions/actions';

describe('fetches anime', () => {
    it('returns initial state', () => {
        expect(fetcher({
            url: '',
            loadedData: [],
            pending: true,
            pendingMore: false,
            offset: 0,
        }, {})).toEqual({
            url: '',
            loadedData: [],
            pending: true,
            pendingMore: false,
            offset: 0,
        })
    })

    it('fetches anime from API', () => {
        expect(fetcher({
            url: '',
            loadedData: [],
            penging: true,
            pendingMore: false,
            offset: 0,
        }, {
            type: GET_ANIME,
            payload: {
                data: [1],
                url: 'url',
                pending: false,
                offset: queryParts.resultsNum,
            }
        })).toEqual({
            url: 'url',
            loadedData: [1],
            pending: false,
            offset: queryParts.resultsNum,
        })
    })

    it('gets more anime', () => {
        expect(fetcher({
            url: '',
            loadedData: [],
            pending: false,
            pendingMore: false,
            offset: 0,
        }, {
            type: GET_MORE,
            payload: {
                data: [1],
                url: 'url',                
                pendingMore: false,
                offset: 2
            }
        })).toEqual({
                url: 'url',
                loadedData: [1],                
                pendingMore: false,
                offset: 2,
            })
        })

})