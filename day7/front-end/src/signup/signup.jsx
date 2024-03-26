import React from "react";
import Element from "../assets/freestocks-PxM8aeJbzvk-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="sicont">
      <div className="sicont1">
        <p className="si">signup</p>
        <div className="signupContainer">
          <div>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label for="username">username</label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label for="pass">password</label>
            <input type="password" id="pass" name="pass" />
          </div>
          <div>
            <label for="conpass">confirm password</label>
            <input type="password" id="conpass" name="conpass" />
          </div>
          <button className="sibtn">signup</button>
          <p className="sp1">
            already have account?{" "}
            <span onClick={() => navigate("/")}>login</span>
          </p>
        </div>
      </div>
      <div className="sicont2">
        <img src={Element} width={500} height={430} />
      </div>
    </div>
  );
};

export default Signup;
