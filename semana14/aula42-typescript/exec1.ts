// const string: string = 5
// a) erro: O tipo 'number' não pode ser atribuído ao tipo 'string'.

// const number: number = 5
// b) artribuir string na tipagem (number | string)

// c) e d)
type personType = {
  name: string,
  age: number,
  favoriteColor: 'violet' | 'dark blue' | 'blue' | 'green' | 'yellow' | 'orange' | 'red'
}

const person1: personType = {
  name: 'Lucas',
  age: 28,
  favoriteColor: 'red'
}

const person2: personType = {
  name: 'Ricardo',
  age: 50,
  favoriteColor: 'dark blue'
}

const person3: personType = {
  name: 'Andressa',
  age: 17,
  favoriteColor: 'violet'
}

const person4: personType = {
  name: 'Eliz',
  age: 45,
  favoriteColor: 'yellow'
}