import axios from "axios"

// create todo
const createTodo =(data)=>{
  return axios.post('/create',data)
}
const todoServices = (createTodo)
export default todoServices
