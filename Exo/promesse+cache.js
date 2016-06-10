let cacheOfUsers = null

function getUsers () {
  // si cache existe l'utiliser
  if (cacheOfUsers) return Promise.resolve(cacheOfUsers)
  // sinon faire la requête et mettre en cache
  cacheOfUsers = fetch('users.json')
    .then((response) => {
      if (!response.ok) throw Error(response.status)
      return response.json()
    })
    .then(users => {
      cacheOfUsers = users
      return users
    })

  return cacheOfUsers
}

getUsers()
 .then(users => {
   console.log('1', users)
 })

getUsers()
 .then(users => {
   console.log('2', users)
 })
