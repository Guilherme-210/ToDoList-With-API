const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

let todoList = []

// Listar tarefas
app.get("/todolist", (req, res) => {
  return res.json(todoList)
})

// listar uma tarefa
app.get("/todolist/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id))
  if (!todo) return res.status(404).json({ error: "Tarefa não encontrada" })

  return res.json(todo)
})

// Adicionar tarefa
app.post("/todolist", (req, res) => {
  const { comment, completionDate, title } = req.body
  const newTodo = {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    completed: false,
    title: title,
    comment: comment,
    completionDate: completionDate,
  }
  
  todoList.push(newTodo)

  return res.status(201).json(newTodo)
})

// Edita a tarefa
app.put("/todolist/editar/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id))

  if (!todo) return res.status(404).json({ error: "Tarefa não encontrada" })
    
  const { title, comment, completionDate } = req.body

  if (!title || !comment || !completionDate) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" })
  }

  todo.title = title
  todo.comment = comment
  todo.completionDate = completionDate

  return res.json(todo)
})

// Atualizar tarefa
app.patch("/todolist/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id))
  if (!todo) return res.status(404).json({ error: "Tarefa não encontrada" })
  todo.completed = req.body.completed
  return res.json(todo)
})

// Deletar tarefa
app.delete("/todolist/:id", (req, res) => {
  todoList = todoList.filter((t) => t.id !== parseInt(req.params.id))

  console.log("Task deletada com sucesso")

  return res.status(204).send()
})

app.listen(3000, () => {
  console.log("🚀 API rodando em http://localhost:3000")
})
