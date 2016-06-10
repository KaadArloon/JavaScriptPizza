function getAvg (array) {
  return array.reduce((accu, age, serarien, arr) => accu + age / arr.length, 0)
}

function getUser (api) {
  return fetch(api)
    .then(response => {
      if (!response.ok) throw Error(response.status)
      return response.json()
    })
    .catch(err => {
      console.log(err)
    })
}

let promesses = Promise.all([getUser('./users.1.json'), getUser('./users.2.json')])

promesses.then(data => {
  return data.map(user => user.age)
})
.then(ages => {
  return getAvg(ages)
})
.then(age => {
  console.log('moyenne des âges', age)
})
