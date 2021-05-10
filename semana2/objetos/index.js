/**
 * 
 * Exercícios de interpretação de código
 * 
 * 
 * 
 * 1)
 * a.
 * Matheus Nachtergaele
 * Virginia Cavendish
 * { canal: 'Globo', horario: '14h' }
 * 
 * 2)
 * a.
 * { nome: 'Juca', idade: 3, raca: 'SRD' } // cachorro
 * { nome: 'Juba', idade: 3, raca: 'SRD' } // gato
 * { nome: 'Jubo', idade: 3, raca: 'SRD' } // tartaruga
 * 
 * b.
 * a sintaxe cujo o nome é spread, ele tranfere todo objeto, para este novo objeto
 * 
 * 3)
 * a.
 * falso e undefined
 * 
 * b.
 * pois a propriedade altura não existe no objeto pessoa
 */


// Exercícios de escrita de código

// 1)
// a.
const pessoa = {
  nome: "Amanda", 
  apelidos: ["Amandinha", "Mandinha", "Mandi"]
}

const imprimirObjeto = (obj) => {
  console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}.`)
}

imprimirObjeto(pessoa)

// b.
const novaPessoa = {
  ...pessoa,
  apelidos: ['Didinha', 'Dinha', 'Amandz']
}

imprimirObjeto(novaPessoa)

// 2)
// a.
const person = {
  nome: 'Lucas Gomes',
  idade: 28,
  profissao: 'Dev'
}
const person2 = {
  nome: 'Andressa Gomes',
  idade: 16,
  profissao: 'Estudante'
}

// b.
const arrayObj = (obj) => {
  const objetos = []
  objetos.push(obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length)

  return console.log(objetos)
}

arrayObj(person)
arrayObj(person2)

// 3)
// a.
const carrinho = []

// b.
const frutas1 = {
  nome: 'Abacaxi',
  disponibilidade: true
}
const frutas2 = {
  nome: 'Manga',
  disponibilidade: true
}
const frutas3 = {
  nome: 'Maça',
  disponibilidade: true
}

// c.
const addFruta = (fruta) => {
  return carrinho.push(fruta)
}

addFruta(frutas1)
addFruta(frutas2)
addFruta(frutas3)

// d.
console.log(carrinho)



// DESAFIOS

// 1)
const newPerson = () => {
  // const nome = prompt('Insira seu nome:')
  const nome = 'Lucas'
  // const idade = Number(prompt('Insira sua idade:'))
  const idade = 28
  // const work = prompt('Insira sua profissão:')
  const work = 'Dev'

  const pessoa = {
    nome: nome,
    idade: idade,
    work: work
  }

  return console.log(pessoa, '->', typeof pessoa)
}

newPerson()

// 2)
const filme1 = {
  nome: 'Matrix',
  lancamento: 1999
}
const filme2 = {
  nome: 'School of Rock',
  lancamento: 2004
}

const imprimeFilme = (obj1, obj2) => {
  const diferençaAno = obj1.lancamento < obj2.lancamento
  const igualdadeAno = obj1.lancamento === obj2.lancamento

  const firstText = `O filme (${obj1.nome}) foi lançado antes do (${obj2.nome})? ${diferençaAno}`
  const secondText = `O filme (${obj1.nome}) foi lançado no mesmo ano do (${obj2.nome})? ${igualdadeAno}`

  return console.log(firstText + '\n' + secondText)
}

imprimeFilme(filme1, filme2)

// 3)
const inverterDiposnibilidadeFruta = (fruta) => {
  const disponibilidadeFruta = fruta.disponibilidade

  const frutas = {
    ...fruta,
    disponibilidade: !disponibilidadeFruta
  }

  return console.log(frutas)
}

inverterDiposnibilidadeFruta(frutas1)