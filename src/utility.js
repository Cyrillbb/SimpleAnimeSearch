import { myApiEND } from './constants';

export const debounce = (func, delay) => {

  let inDebounce
  return function () {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

export const saveFavsToServ = (token, favs) => {
  fetch(myApiEND + 'saveFavs', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ favs: favs })
  })
}