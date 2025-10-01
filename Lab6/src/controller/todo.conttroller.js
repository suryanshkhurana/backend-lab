// Start with an empty array (in-memory storage)
let todos = [];

// Get all todos
export const getTodos = (req, res) => {
  res.json(todos);
};

// Get todo by ID
export const getTodoById = (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
};

// Create a new todo
export const createTodo = (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ message: "Task is required" });

  const newTodo = { id: todos.length + 1, task, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update a todo
export const updateTodo = (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  todo.task = req.body.task ?? todo.task;
  todo.done = req.body.done ?? todo.done;

  todos = todos.map(t => (t.id == todo.id ? todo : t));
  res.json(todo);
};

// Delete a todo
export const deleteTodo = (req, res) => {
  const todo = todos.find(t => t.id == req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  todos = todos.filter(t => t.id != req.params.id);
  res.json({ message: "Todo deleted successfully" });
};
