import { Pizza } from './pizza.js'
import { PizzasList } from './pizzasList.js'

var buttonAddPizza = document.getElementById('createPizza')
var buttonAddEgg = document.getElementById('ing_egg')
var buttonAddMozza = document.getElementById('ing_mozza')
var buttonAddMush = document.getElementById('ing_mushrooms')
var nouvellePizza
var pizzaListe = new PizzasList()

console.log(buttonAddPizza)
console.log(buttonAddEgg)
console.log(buttonAddMozza)
console.log(buttonAddMush)

buttonAddPizza.addEventListener('click', function (evt) {
  nouvellePizza = new Pizza('Pizza yolo !')
}, false)

buttonAddEgg.addEventListener('click', function (evt) {
  nouvellePizza.ajoutUneGarniture('eggs')
}, false)

buttonAddMozza.addEventListener('click', function (evt) {
  nouvellePizza.ajoutUneGarniture('mozzarella')
}, false)

buttonAddMush.addEventListener('click', function (evt) {
  nouvellePizza.ajoutUneGarniture('mushrooms')
}, false)


pizzaListe.addPizza(nouvellePizza)
    .then(res => {
      console.log('Pizza ajoutée', res)
    })

/*buttonAddEgg.addEventListener('click', function (evt) {
  nouvellePizza.then(p => {}
  pizzaListe.addPizza(nouvellePizza)
    .then(res => {
      console.log('Pizza ajoutée', res)
    })
}, false)
/*
pizzaList.addPizza(
  new Pizza('Margherita')
    .ajoutUneGarniture('tomato sauce')
    .ajoutUneGarniture('mozzarella')
)

pizzaList.addPizza(
  new Pizza('Funghi')
    .ajoutUneGarniture('tomato sauce')
    .ajoutUneGarniture('mozzarella')
    .ajoutUneGarniture('mushrooms')
)

let pizzas = Promise.resolve(pizzaList.getPizzas())
pizzas
  .then(pizzas => {
    console.log(pizzas)
    return pizzas
      .forEach(pizza => {
        pizza.cuire(5000)
          .then(() => {
            console.log('yopla boom ! une pizza de cuite !')
          })
      })
  })
*/
