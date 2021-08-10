// const string: string = 5
// a) erro: O tipo 'number' não pode ser atribuído ao tipo 'string'.

// const number: number = 5
// b) artribuir string na tipagem (number | string)

// c) e d)
enum COLORS {
  VIOLET = 'violet',
  DARK_BLUE = 'dark blue',
  BLUE = 'blue',
  GREEN = 'green',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  RED = 'red'
}

type personType = {
  name: string,
  age: number,
  favoriteColor: COLORS
}

const person1: personType = {
  name: 'Lucas',
  age: 28,
  favoriteColor: COLORS.RED
}

const person2: personType = {
  name: 'Ricardo',
  age: 50,
  favoriteColor: COLORS.DARK_BLUE
}

const person3: personType = {
  name: 'Andressa',
  age: 17,
  favoriteColor: COLORS.VIOLET
}

const person4: personType = {
  name: 'Eliz',
  age: 45,
  favoriteColor: COLORS.YELLOW
}