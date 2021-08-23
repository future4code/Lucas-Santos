const op = process.argv[2].toLowerCase()
const a = Number(process.argv[3])
const b = Number(process.argv[4])

const math = () => {
  switch (op) {
    case 'add':
      return `${a} + ${b} = ${a + b}`
    case 'sub':
      return `${a} - ${b} = ${a - b}`
    case 'mult':
      return `${a} * ${b} = ${a * b}`
    case 'div':
      return `${a} / ${b} = ${a / b}`
    default:
      return 'num deu'
  }
}

module.exports = math()