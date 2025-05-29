const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

let todoList = []

// Listar tarefas
app.get("/todolist", (req, res) => {
  res.json(todoList)
})

// Adicionar tarefa
app.post("/todolist", (req, res) => {
  const { title } = req.body
  const newTodo = {
    id: Date.now(),
    title: title,
    completed: false,
  }
  todoList.push(newTodo)
  res.status(201).json(newTodo)
})

// Edita a tarefa
app.put("/todolist/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id))
  if (!todo) return res.status(404).json({ error: "Tarefa não encontrada" })
  todo.title = req.body.title
  res.json(todo)
})

// Atualizar tarefa
app.patch("/todolist/:id", (req, res) => {
  const todo = todoList.find((t) => t.id === parseInt(req.params.id))
  if (!todo) return res.status(404).json({ error: "Tarefa não encontrada" })
  todo.completed = req.body.completed
  res.json(todo)
})

// Deletar tarefa
app.delete("/todolist/:id", (req, res) => {
  todoList = todoList.filter((t) => t.id !== parseInt(req.params.id))

  console.log("Task deletada com sucesso")

  return response.status(204).send()
})

app.listen(3000, () => {
  console.log("🚀 API rodando em http://localhost:3000")
})
