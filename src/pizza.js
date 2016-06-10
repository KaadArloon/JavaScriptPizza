import {garnitures as garnituresOk} from './garniture.js'
export class Pizza {
  constructor (nom, garnitures = []) {
    this.nom = nom
    this.garnitures = []
    // garnitures.forEach(this.ajoutUneGarniture.bind(this))
    garnitures.forEach(g => this.ajoutUneGarniture(g))
  }

  setNom (nvNom) {
    this.nom = nvNom
  }

  ajoutUneGarniture (nvGarniture) {
    if (Object.keys(garnituresOk).indexOf(nvGarniture) === -1) return
    if (this.garnitures.filter(g => g === nvGarniture).length > 2) return
    this.garnitures.push(nvGarniture)
    return this
  }

  enleveUneGarniture (noGarniture) {
    const pos = this.garnitures.indexOf(noGarniture)
    if (pos !== -1) {
      this.garnitures.splice(pos, 1)
    }
    return this
  }

  enleveLaGarniture (noGarniture) {
    this.garnitures.filter(function (item) {
      return item !== noGarniture
    })
  }

  contientGarniture (garniture) {
    return this.garnitures.indexOf(garniture) !== -1
  }

  traduction (garniture, lang = 'en') {
    return garnituresOk[garniture][lang] || garniture
  }

  garnituresToString (lang = 'en') {
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(garniture => {
        const size = this.garnitures.filter(item => item === garniture).length
        if (size > 1) return `${this.translate(garniture, lang)} x${size}`
        return `${this.translate(garniture, lang)}`
      })
      .join(', ')
  }

  cuire (tempsms = 1000) {
    return new Promise(resolve => {
      setTimeout(resolve, tempsms)
    })
  }
}
