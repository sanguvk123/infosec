import React from "react";

import { AddRole } from "../../api/index";
import Button from 'react-bootstrap/Button';

import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Addrole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Type',
            role: 'Role name'
        }
    }

    handleChange(e) {
        console.log(e.target);
        this.setState({ [e.target.name] : e.target.value });
    }
  
    handleSubmit = async (e) => {
        this.setState({ [e.target.name] : e.target.value });
        let res = await AddRole(this.state.type, this.state.role);
        alert('Role ' + this.state.role + ' added to ' + this.state.type + ' admin.');
    //   event.preventDefault();
    }
  
    render() {
      this.handleChange.bind(this);
      return (
        <form>
          <label>
            <select 
            name = "type"
            value={this.state.type}
            onChange={this.handleChange.bind(this)}>
              <option value="webadmin">Web Admin</option>
              <option value="voipadmin">VoIPAdmin</option>
              <option value="ftpadmin">FTPAdmin</option>
            </select>
          </label>
          <label>
            <input
                type="text"
                name="role"
                value={this.state.role}
                onChange={(evt) => this.handleChange(evt)}
                className="form-control mt-1"
                placeholder="Enter Role"
            />
          </label>
          <Button onClick={(evt) => this.handleSubmit(evt)} variant="primary" size="lg">
                Submit
          </Button>
        </form>
      );
    }
  }
