import React from "react";

import { AssignUserToRole } from "../../api/index";
import './assignpage.css';
import Button from 'react-bootstrap/Button';
import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Fassignpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Role'
        }
        this.state = {
            user: 'User'
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
  
    handleSubmit = async () => {
        
        alert('Role ' + this.state.role + ' is assigned to ' + this.state.user);
        let res = await AssignUserToRole(this.role, this.user);
    //   event.preventDefault();
    }
  
    render() {
      return (
        <div className="master">
          <div className="heading"> Web Admin Page</div>
          <div className="row">
          <div className="column left">
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="column right">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          </div>
        <div className="container">
        Add Role to User?
            <form onSubmit={this.handleSubmit}>
            <label>
              <select 
              name = "role"
              value={this.state.role}
              onChange={this.handleChange.bind(this)}>
                <option value="Role1">Role1</option>
                <option value="Role2">Role2</option>
                <option value="Role3">Role3</option>
                <option value="Role4">Role4</option>
              </select>
            </label>
            <label>
              <select 
              name = "user"
              value={this.state.user} 
              onChange={this.handleChange.bind(this)}>
                <option value="User1">User1</option>
                <option value="User2">User2</option>
                <option value="User3">User3</option>
                <option value="User4">User4</option>
              </select>
            </label>
            <Button onClick={(evt) => this.handleSubmit()} variant="primary" size="lg">
                  Submit
            </Button>
          </form>
        </div>
        </div>
      );
    }
  }
