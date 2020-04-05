export const debounce = (func, delay) => {
  let inDebounce
  return function () {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

export const setLocalStr = (ids, favs) => {  
  localStorage.setItem('ids', JSON.stringify(ids))
  localStorage.setItem('favs', JSON.stringify(favs))
}