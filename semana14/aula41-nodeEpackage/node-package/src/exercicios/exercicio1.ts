// a)
// ● process.argv[0]: o primeiro argumento é o próprio node
// ● process.argv[1]: o segundo argumento é o arquivo que vamos executar
// ● A partir do process.argv[2], nós podemos atribuir valores

// b)
const person = {
  name: process.argv[2],
  age: Number(process.argv[3])
}

// c)
const newAge = person.age + 7

module.exports = { person, newAge }