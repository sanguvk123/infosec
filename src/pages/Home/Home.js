import React, { useState } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from "../../api/index";

export default function (props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigateToSuperAdmin = async (e) => {
    // 👇️ navigate to /Wadmin
    e.preventDefault();
    let res = await Login(email, pw);
    if (res.statusCode !== 404) {

      if (res.data.unit !== null) {
        if (res.data.unit == 'superadmin')
          navigate('/Superhome');
        else if (res.data.unit == 'webadmin')
          navigate('/wassignpage');
        else if (res.data.unit == 'ftpadmin')
          navigate('/fassignpage');
        else if (res.data.unit == 'voipadmin')
          navigate('/vassignpage');
        else
          navigate('/');

      }
      else {
        navigate('/errorpage');


      }




    }

  };

  const navigateToSignUp = () => {
    navigate("signup");
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(evt) => { setEmail(evt.target.value); }}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              value={pw}
              onChange={(evt) => setPw(evt.target.value)}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={navigateToSuperAdmin} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={navigateToSignUp} type="submit" className="btn btn-primary">
              Sign Up?
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
