export const debounce = (func, delay) => {
  let inDebounce
  return function () {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

export const setLocalStr = (favs) => {
  if (favs.length > 0) {    
    localStorage.setItem('favs', JSON.stringify(favs))
  }
  else {
    localStorage.clear()
  }
}