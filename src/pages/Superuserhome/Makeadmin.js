import React from "react";

import { MakeAdmin } from "../../api/index";

import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Makeadmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Type'
        }
        this.state = {
            user: 'User'
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
  
    handleSubmit = async () => {
        alert('User ' + this.state.user + ' is made ' + this.state.type + ' admin');
        let res = await MakeAdmin(this.role, this.user);
    //   event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select 
            name = "type"
            value={this.state.type}
            onChange={this.handleChange.bind(this)}>
              <option value="Web Admin">Web Admin</option>
              <option value="VoIP Admin">VoIP Admin</option>
              <option value="FTP Admin">FTP Admin</option>
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
