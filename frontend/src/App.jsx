import React from 'react'
import About from './pages/about/About.jsx'
import {Routes ,Route}from "react-router-dom"
import Landing from './pages/Landing/Landing.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import TodoList from './pages/Todos/TodoList.jsx'
import Home from "./pages/home/Home.jsx"
import  { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/todolist' element={<TodoList/>}/>
      
     </Routes>
     <Toaster />
      
    </>
  )
}

export default App