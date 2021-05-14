/**
 * Exercícios de interpretação de código
 * 
 * 1) Os elementos, os index e o array usuarios
 * 
 * 2) vai imprimir os elemntos nome do array usuarios dentro de um array
 * 
 * 3) vai imprimir todas as propriedades que não tem como elemento apelido 'Chijo' dentro de um array 
 * 
 */

// Exercícios de escrita de código

// 1)
const pets = [
  { nome: "Lupin", raca: "Salsicha"},
  { nome: "Polly", raca: "Lhasa Apso"},
  { nome: "Madame", raca: "Poodle"},
  { nome: "Quentinho", raca: "Salsicha"},
  { nome: "Fluffy", raca: "Poodle"},
  { nome: "Caramelo", raca: "Vira-lata"},
]
// // a.
const nomePets = pets.map((pet) => {
  return pet.nome
})

console.log(nomePets)
// // b.
const petsSalsicha = pets.filter((pet) => {
  return pet.raca === 'Salsicha'
})

console.log(petsSalsicha)
// // c.
const enviarDescontoPoodle = pets.filter((pet) => {
  return pet.raca === 'Poodle'
}).map((pet) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})

console.log(enviarDescontoPoodle)

// 2)
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a.
const nomeProdutos = produtos.map((produto) => {
  return produto.nome
})

console.log(nomeProdutos)
// b.
const aplicarDesconto = produtos.map((produto) => {
  return {nome: produto.nome, preco: (produto.preco * 0.95).toFixed(2)}
})

console.log(aplicarDesconto)
// c.
const categoriaBebidas = produtos.filter((produto) => {
  return produto.categoria === 'Bebidas'
})

console.log(categoriaBebidas)
// d.
const nomeYpe = produtos.filter((produto) => {
  return produto.nome.includes('Ypê')
})

console.log(nomeYpe)
// e.
const nomeProdutoYpe = produtos.filter((produto) => {
  return produto.nome.includes('Ypê')
})

const compreYpe = nomeProdutoYpe.map((produto) => {
  return `Compre ${produto.nome} por ${produto.preco}`
})

console.log(compreYpe)



// DESAFIOS

// 1)
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
]
// a.
const nomesOrdemAlfabetica = pokemons.map((pokemon) => {
  return pokemon.nome
})

console.log(nomesOrdemAlfabetica.sort())
// b.
const tiposNaoRepetidos = pokemons.map((pokemon) => {
  return pokemon.tipo
}).filter((tipo, index, array) => {
  return array.indexOf(tipo) === index
})

console.log(tiposNaoRepetidos)