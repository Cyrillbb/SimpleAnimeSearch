
// import { favorite } from './Favorite';
// import { toggleFav } from '../actions/actions';
// import { GET_LOCAL_STR } from './../actions/actions';

// describe('handles favorites', () => {
//     it('returns initial state', () => {
//         expect(favorite(undefined, {})).toEqual({
//             favIds: [],
//             favs: []
//         })        
//     })

//     it('toggles favorites', () => {
//         expect(favorite(undefined, toggleFav('1', {1: 1}))).toEqual({
//             favIds: ['1'],
//             favs: [{1: 1}]
//         })
//     })

//     it('gets favourite anime from local storage', () => {
//         expect(favorite(undefined, {
//             type: GET_LOCAL_STR,
//             payload: {
//                 favIds: ['1'],
//                 favs: {1: 1}
//             }
//         })).toEqual({
//             favIds: ['1'],
//             favs: {1: 1}
//         })
//     })
// })