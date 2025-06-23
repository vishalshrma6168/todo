import express from "express"
import { createTodoController, deleteTodoController, getTodoController, updateTodoController } from "../Controllers/TodoController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const Router = express.Router()

// create todo

Router.post('/create',authMiddleware,createTodoController)

// get todo
Router.post('/getall/:userId',authMiddleware,getTodoController)
// delete todo
Router.post("/delete/:id",authMiddleware,deleteTodoController)
// update todo
Router.post("/update/:id",authMiddleware,updateTodoController)
export default Router