import dotenv from 'dotenv'
import express from 'express';

dotenv.config();

const app = express();

app.use(express.json({limit: "16kb"}));

app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));


import todoRouter from './routes/todo.routes.js'

app.use("/api/todos", todoRouter);

export {app};