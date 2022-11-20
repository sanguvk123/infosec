import React from "react";

import { AssignUserToRole } from "../../api/index";

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
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
