var array = [0, 1, 2, 3, 4]

var isEven = function (v) {
  return v % 2 === 0
}

var evens1 = array.filter(isEven)
var evens2 = array.reduce(function (accu, item) {
  if (isEven(item)) {
    accu.push(item)
  }
  return accu
}, [])

console.log(evens1, evens2)
