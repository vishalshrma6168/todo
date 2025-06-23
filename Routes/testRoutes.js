import express from "express"
import testController from "../Controllers/TestController.js"
const testRoute = express.Router();

testRoute.get('/',testController)

export default testRoute