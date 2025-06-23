import React from "react";
import { Form, Link } from "react-router-dom";
import "./Landing.css"
function Landing() {
  return (
    <>
      <div className="hero">
        <div className="intro-text">
          <h1 className=" ">
            <span className="tagline1">organize work and life</span>
            <br/>
            <span className="tagline2">finally</span>
          </h1>
          <p className="">Add your daily task</p>
          <Link to="/register" className="btn red"> Register now </Link>
          
          <Link to="/login" className="btn blue  ">&nbsp; login </Link>
        </div>
        <div className="">
          <img  src="/todo.jpg" width={"60%"} height={515} />
        </div>
      </div>
    </>
  );
}

export default Landing;
