import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";
import "./Auth.css";
import { getErrorMessage } from "../../utils/ErrorMessage.jsx";
import AuthServices from "../../Services/AuthServices.jsx";
import toast  from 'react-hot-toast';
function Register() {
    const [email, setEmail] = useState("");
    const [username, setUserName] = useState("");
    const [password, SetPassword] = useState("");
  const navigate = useNavigate()
    // login function
    const RegisterHandler =async (e) => {
      try{
    e.preventDefault();
    const data = {email,password ,username};
   const res = await AuthServices.registerUser(data)
   toast.success(res.data.message)
   navigate('/home')
   
   console.log(res.data)
    }catch(err){
      toast.error(getErrorMessage(err))
      console.log(err)
    }
    };
  return (
    <div className="container">
        <div className="form">
          <div className="mb-3">
            <i class="fa-solid fa-circle-user"></i>
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              className="w-60 h-10  bg-gray-200 rounded"
              type="text"
              placeholder="enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-60 h-10  bg-gray-200 rounded"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              onChange={(e) => SetPassword(e.target.value)}
              value={password}
              className="w-60 h-10  bg-gray-200  rounded"
              placeholder="password"
              required
            />
          </div>
          <div className="form-bottom">
            <p className="text-center">
              not a user pleace :
              <Link to="/register" className="reg">
                {" "}
                register
              </Link>
            </p>
            <button  type="submit" onClick={RegisterHandler} className="login-btn">
              login
            </button>
          </div>
        </div>
      </div>
  )
}

export default Register