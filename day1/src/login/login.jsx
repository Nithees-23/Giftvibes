import React from "react";
import "./login.css";
import Element from "../assets/freestocks-PxM8aeJbzvk-unsplash.jpg";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="logcont">
        <img src={Element} height={400} width={500} className="logimg" />
      </div>
      <div className=" login-main">
        <form>
          <p className="sp">login</p>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
          <label for="pass">password</label>
          <input type="password" id="pass" name="pass" />
          <button className="logbtn">login</button>
          <p className="sp1">don't have account? <span onClick={()=>navigate("/signup")}>register</span></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
