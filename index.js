import express from "express"
import dotenv from "dotenv";
import connectDb from "././db/db.js"
import cors from "cors"
import testRoute from "./Routes/testRoutes.js";
import UserRouter from "./Routes/UserRoute.js";
import Router from "./Routes/TodoRoute.js"
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

// middleware
app.use(express.json())

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
// routes middlewre
app.use('/api/v1',testRoute)
app.use("/api/v1",UserRouter)

// todo 
app.use("/api/v1",Router)

const port = process.env.PORT ||4000



// listen
app.listen(port, () => {
  // db connection
  connectDb()
  console.log(`Server is running on port ${port}`);
});