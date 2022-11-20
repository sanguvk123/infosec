import React from "react";

import { AddRole } from "../../api/index";

import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Addrole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: '0'
        }
        this.state = {
            role: 'Role name'
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
  
    handleSubmit = async (e) => {
        this.setState({ [e.target.role] : e.target.value });
        alert('Role ' + this.state.role + ' added to ' + this.state.type + ' admin.');
        let res = await AddRole(this.type, this.role);
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
              <option value="WebAdmin">Web Admin</option>
              <option value="VoIPAdmin">VoIPAdmin</option>
              <option value="FTPAdmin">FTPAdmin</option>
            </select>
          </label>
          <label>
            <input
                type="text"
                value={this.state.text}
                // this onchange not working
                onChange={this.handleChange}
                className="form-control mt-1"
                placeholder="Enter Role"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
