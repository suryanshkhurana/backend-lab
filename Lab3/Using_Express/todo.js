
import express from "express";

const app = express();
app.use(express.json());

let todos = [];


app.get("/todos", (req, res) => {
  res.json(todos);
});


app.post("/todos", (req, res) => {
  const { id, task } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  const newTodo = { id, task, completed: false };
  todos.push(newTodo);

  res.status(201).json({ message: "Todo added", todo: newTodo });
});


app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task, completed } = req.body;
  const todo = todos.find(t => t.id === id);

  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json({ message: "Todo updated", todo });
});


app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.json({ message: "Todo deleted", todos });
});


app.listen(3000, () => {
  console.log("Express server running on http://localhost:3000");
});
