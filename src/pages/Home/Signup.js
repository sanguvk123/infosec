import React, { useState } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom';
import { SignUp } from "../../api/index";

export default function Signup(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const navigateToSuperAdmin = async (e) => {
    // 👇️ navigate to /Wadmin
    e.preventDefault();
    let res = await SignUp(email, pw);
    if (res.statusCode !== 404)
      navigate('/basichome');
  };

  return (

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
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
          {/* Navigate to super user admin page, web/voip/ftp admin page accordingly */}
          <div className="d-grid gap-2 mt-3">
            <button onClick={navigateToSuperAdmin} type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
