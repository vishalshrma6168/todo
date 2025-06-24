import express from "express"
import { createTodoController, deleteTodoController, getTodoController, updateTodoController } from "../Controllers/TodoController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { searchTodoController } from "../Controllers/TodoController/SearchController.js"

const Router = express.Router()

// create todo

Router.post('/create',authMiddleware,createTodoController)

// get todo
Router.get('/getall/:userId',authMiddleware,getTodoController)
// delete todo
Router.post("/delete/:id",authMiddleware,deleteTodoController)
// update todo
Router.post("/update/:id",authMiddleware,updateTodoController)
// search todo
Router.get("/search/:id",authMiddleware,searchTodoController)

export default Router