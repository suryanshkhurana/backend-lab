import http from "http";

let todos = [];


function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/todos") {
    
    sendJSON(res, 200, todos);
  }

  else if (req.method === "POST" && req.url === "/todos") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const { id, task } = JSON.parse(body);

        if (id === undefined || !task) {
          return sendJSON(res, 400, { error: "Both id and task are required" });
        }

       
        if (todos.some(todo => todo.id === id)) {
          return sendJSON(res, 400, { error: "Todo with this id already exists" });
        }

        const newTodo = { id, task, completed: false };
        todos.push(newTodo);

        sendJSON(res, 201, { message: "Todo added", todo: newTodo });
      } catch (err) {
        sendJSON(res, 400, { error: "Invalid JSON" });
      }
    });
  }

  else {
    sendJSON(res, 404, { error: "Route not found" });
  }
});

server.listen(3000, () => {
  console.log("HTTP server running at http://localhost:3000");
});
