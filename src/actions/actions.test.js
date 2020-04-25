import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'
import { GET_ANIME, getAnime, TOGGLE_FAVORITE, toggleFav, getTitle, GET_TITLE, getCateg, GET_CATEGORIES, getMore, GET_MORE } from './actions';
import { queryParts } from '../constants';
import expect from 'expect'




const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('getAnime async', () => {

  afterEach(() => {
    fetchMock.restore()
  })

  it('fetches anime', () => {
    fetchMock.getOnce('https://kitsu.io/api/edge/anime?&sort=ratingRank&page[limit]=12&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis',
      {
        data: [],
        headers: { 'content-type': 'application/json' }
      })

    const expectedResults =
      [
        {
          payload: {
            data: [],
            pending: true,
            url: "",
          },
          "type": "GET_ANIME",
        },
        {
          type: GET_ANIME,
          payload: {
            data: [],
            url: 'https://kitsu.io/api/edge/anime?&sort=ratingRank&page[limit]=12&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis',
            pending: false,
            offset: queryParts.resultsNum,
          }
        }]

    const store = mockStore({
      data: [],
      url: '',
      pending: false,
      offset: 0,
    })
    return store.dispatch(getAnime(queryParts.topRated))
      .then(() => {
        expect(store.getActions()).toEqual(expectedResults)
      })

  })

})

describe('toggle fav', () => {
  const id = 'id',
    item = 'item'
  it('toggles favorites', () => {
    const results = {
      type: TOGGLE_FAVORITE,
      payload: {
        id,
        item
      }
    }
    expect(toggleFav(id, item)).toEqual(results)

  })
})

describe('get title', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('gets an anime title', () => {
    fetchMock.getOnce('https://kitsu.io/api/edge/anime?&filter[id]=7442&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis,youtubeVideoId',
      {
        data: [{}],
        headers: { 'content-type': 'application/json' }
      })

    const expectedResult = [
      {
        type: GET_TITLE,
        payload: {
          id: '7442',
          pending: true,
          data: {},
        }
      },
      {
        type: GET_TITLE,
        payload: {
          id: '7442',
          pending: false,
          data: {},
        }
      }
    ]

    const store = mockStore({
      data: {},
      pending: false,
      id: 1,
    })

    return store.dispatch(getTitle('7442')).then(() => {
      expect(store.getActions()).toEqual(expectedResult)
    })

  })
})

describe('gets anime categories', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('gets an array of categories', () => {

    fetchMock.getOnce('https://kitsu.io/api/edge/categories?sort=-totalMediaCount&page[limit]=60&page[offset]=0',
      {
        data: [],
        headers: { 'content-type': 'application/json' }
      })

    const expectedResults = [{
      type: GET_CATEGORIES,
      payload: []
    }]

    const store = mockStore([])

    return store.dispatch(getCateg()).then(() => {
      expect(store.getActions()).toEqual(expectedResults)
    })
  })
})

describe('get more async', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('gets more search results', () => {
    fetchMock.getOnce('https://kitsu.io/api/edge/anime?&sort=ratingRank&page[limit]=12&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis&page[offset]=&page[offset]=12',
      {
        data: [],
        headers: { 'content-type': 'application/json' }
      })
    const expectedResult = [
      {
        type: GET_MORE,
        payload: {
          data: [],
          url: '',
          pendingMore: true
        }
      },
      {
        type: GET_MORE,
        payload: {
          data: [],
          url: 'https://kitsu.io/api/edge/anime?&sort=ratingRank&page[limit]=12&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis&page[offset]=',
          pendingMore: false,
          offset: 24
        }
      }
    ]
    const store = mockStore({})

    return store.dispatch(getMore('https://kitsu.io/api/edge/anime?&sort=ratingRank&page[limit]=12&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis&page[offset]=', 12))
      .then(() => {
        expect(store.getActions()).toEqual(expectedResult)
      })

  })

})