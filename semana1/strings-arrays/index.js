// Exercícios de interpretação de código

// 1)
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// 2)
// SUBI NUM ÔNIBUS EM MIRROCOS 27



// Exercícios de escrita de código

// 1)
const userName = prompt('Digite seu nome:')
const userEmail = prompt('Digite seu email:')
console.log(`1) O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}!`)

// 2)
// a.
const food = [
  'Feijoada',
  'Lasanha',
  'Pizza',
  'Abacaxi',
  'Camarão'
]
console.log('2) a.', food)
// b.
console.log(
`b. Essas são as minhas comidas preferidas:
• ${food[0]}
• ${food[1]}
• ${food[2]}
• ${food[3]}
• ${food[4]}`
)
// c.
const questionFood = prompt('Digite sua comida favorita:')
food[1] = questionFood
console.log('c.', food)

// 3)
// a.
const taskList = []
// b.
const task1 = prompt('1) Digite uma task:')
const task2 = prompt('2) Digite sua segunda task:')
const task3 = prompt('3) Digite sua terceira task:')
taskList.push(task1, task2, task3)
// c.
console.log('3) c.', taskList)
// d.
const iTask = prompt(`Digite o número da tarefa realiza (1.${taskList[0]} / 2.${taskList[1]} / 3.${taskList[2]}):`)
// e.
const removeTask = iTask - 1
taskList.splice(removeTask, 1)
// f.
console.log('f.', taskList)


// DESAFIOS

// 1)
const frase = 'eu amo javascript'
const arrayFrase = frase.split(' ')
console.log(arrayFrase)

// 2)
const fruit = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
console.log('2)', fruit)
console.log('indice do abacaxi: ' + fruit.indexOf('Abacaxi'), '| length: ' + fruit[3].length)