import express from "express";
import logger from "./middleware/logger.middleware.js";
import errorHandler from "./middleware/errorHandler.middleware.js";
import todosRouter from "./routes/todo.routes.js";

const app = express();
app.use(express.json()); // Parse JSON body


app.use(logger);


app.use("/api/todos", todosRouter);


app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
