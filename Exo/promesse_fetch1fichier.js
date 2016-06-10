function getAvg (array) {
  return array.reduce((accu, age, serarien, arr) => accu + age / arr.length, 0)
}

fetch('users.json')
  .then(response => {
    if (!response.ok) throw Error(response.status)
    return response.json()
  })
  .then(data => {
    console.log(data.map(user => user.age))
    return data.map(user => user.age)
  })
  .then(ages => {
    return getAvg(ages)
  })
  .then(age => {
    console.log('moyenne des âges', age)
  })
  .catch(err => {
    console.log(err)
  })
