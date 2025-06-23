import axios from "axios"

const registerUser =(data)=>{
  return axios.post("/api/v1/register",data)
}
const loginUser =(data)=>{
  return axios.post("/api/v1/login",data)
}


const AuthServices ={registerUser,loginUser}
export default AuthServices
