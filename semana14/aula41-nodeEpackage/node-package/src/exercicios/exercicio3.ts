const task = process.argv[2]
const alltask: string[] = ['código revisado', 'array ok']

const listTask = () => {
  alltask.push(task)

  return 'Tarefa adicionada com sucesso!'
}

module.exports = { listTask, alltask }