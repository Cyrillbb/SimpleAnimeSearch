export const queryParts = {
    apiURL: 'https://kitsu.io/api/edge/anime?',
    nameSearch: '&filter[text]=',
    topRated: '&sort=ratingRank',
    mostPop: '&sort=popularityRank',
    topAir: '&filter[status]=current&sort=popularityRank',
    resultsNum: 10,
    pageLim: '&page[limit]=',
    pageOff: '&page[offset]=',
    categories: 'https://kitsu.io/api/edge/categories?sort=-totalMediaCount&page[limit]=60&page[offset]=0',
    filter: '&fields[anime]=id,posterImage,titles,canonicalTitle,averageRating,popularityRank,ageRating,episodeCount,status,synopsis',
    categSearch: 'filter[categories]=',    
    idFilter: 'https://kitsu.io/api/edge/anime?&filter[id]='
}

export const apiEND = queryParts.pageLim + queryParts.resultsNum + queryParts.filter

export const sortTypes = {
    byRating: 'topRated',
    byPop: 'mostPop',
    byTopAir: 'topAir'
}

export const fetchHeader = {
    method: 'GET',
    headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
    }
}