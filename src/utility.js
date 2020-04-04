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
  Storage.setItem('ids', JSON.stringify(ids))
  Storage.setItem('favs', favs)
}