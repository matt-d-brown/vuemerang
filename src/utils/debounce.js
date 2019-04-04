module.exports = function debounce (fn, delay) {
  var timeoutID = null
  let aux = () => {
    clearTimeout(timeoutID)
    var args = arguments
    var that = this
    timeoutID = setTimeout(() => {
      fn.apply(that, args)
    }, delay)
  }
  console.log(timeoutID)
  return aux()
}
