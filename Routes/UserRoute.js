import express from "express"
import {logoutController, userLoginController, userRegisterController }from "../Controllers/UserController.js"

const UserRouter = express.Router()

// routes
UserRouter.post('/register',userRegisterController)

// login route
UserRouter.post('/login',userLoginController)
UserRouter.post('/logout',logoutController)
export default UserRouter