import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import "./Auth.css";
import AuthServices from "../../Services/AuthServices.jsx";
import toast  from 'react-hot-toast';
import { getErrorMessage } from "../../utils/ErrorMessage.jsx";


function Login() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
const navigate = useNavigate()
  // login function
  const loginHandler = async (e) => {
    try{
    e.preventDefault();
    const data = {email,password };
   const res = await AuthServices.loginUser(data)
   toast.success(res.data.message)
   navigate('/home')
   localStorage.setItem('todoapp',JSON.stringify(res.data))
   console.log(res.data)
    }catch(err){
      toast.error(getErrorMessage(err))
      console.log(err)
    }
    
  }
  return (
    <>
     
        <div className="container">
          <div className="form">
            <div className="mb-3">
              <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-60 h-10  rounded"
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
                className="w-60 h-10  rounded"
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
              <button
                type="submit"
                onClick={loginHandler}
                className="login-btn"
              >
                login
              </button>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Login;
