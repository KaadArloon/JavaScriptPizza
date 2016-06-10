import Dexie from 'dexie'

export class PizzasList {
  constructor () {
    this.db = new Dexie('pizzeria')
    this.db.version(1).stores({
      pizzas: '++id,name'
    })
    this.db.version(2).stores({
      pizzas: '++id,nom'
    })
    this.db.open()
  }

  addPizza (nvPizza) {
    return this.db.pizzas.add(nvPizza)
  }

  /* enleveUnePizza (noPizza) {
    this.pizzas.splice(this.pizzas.indexOf(noPizza), 1)
  }

  rechercherPizzasParGarniture (garniture) {
    let pizzaAvecGarniture = this.pizzas.filter(p => p.contientGarniture(garniture))
    return pizzaAvecGarniture
  }

  getPizzas () {
    return this.pizzas
  }

  /* rechercherPizzasParGarnitures (garnitures = []) {
   *
  }*/
}
