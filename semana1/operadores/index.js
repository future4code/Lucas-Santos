// Exercícios de interpretação de código

// 1)
// a. false | b. false | c. true | d. boolean

// 2) 
// prompt sempre transforma em string, então não será somado, será concatenado

// 3)
// Colocar em volta do prompt ou das variaveis atribuidas em soma, o método Number()


// Exercícios de escrita de código

// 1)
// a.
const idade = Number(prompt('Qual é a sua idade?'))

// b.
const idadeFriend = Number(prompt('Qual é a idade do seu melhor amigo(a)?'))

// c.
console.log('Sua idade é maior do que a do seu melhor amigo(a)?', idade > idadeFriend)

// d.
const idadeDiferença = idade - idadeFriend
console.log('A diferença de idade de vcs é:', idadeDiferença)

// 2)
// a.
const numeroPar = Number(prompt('Insira um número PAR'))

// b.
let resto = numeroPar % 2
console.log(`O resto da divisão de ${numeroPar} / 2 é:`, resto)

// c.
// todo número PAR dividido por 2 o restante é zero

// d.
// vai restar algo, pois numero impar não é divisível por 2

// 3)
// a.
const mesesAoAno = 12
const idadeMeses = idade * mesesAoAno
console.log('Sua idade em meses:', idadeMeses)

// b.
const diasAoMes = 30
const idadeDias = idadeMeses * diasAoMes
console.log('Sua idade em dias:', idadeDias)

// c.2
const diaInteiro = 24
const idadeHoras = idadeDias * diaInteiro
console.log('Sua idade em horas:', idadeHoras)

// 4)
const primeiroNumero = Number(prompt('Insira um número:'))
const segundoNumero = Number(prompt('Insira um outro número:'))
console.log(`O numero ${primeiroNumero} é maior que ${segundoNumero}?`, primeiroNumero > segundoNumero)
console.log(`O numero ${primeiroNumero} é igual ao ${segundoNumero}?`, primeiroNumero === segundoNumero)

resto = primeiroNumero % segundoNumero
console.log(`O numero ${primeiroNumero} é divisível pelo ${segundoNumero}?`, resto === 0)

resto = segundoNumero % primeiroNumero
console.log(`O numero ${segundoNumero} é divisível pelo ${primeiroNumero}?`, resto === 0)