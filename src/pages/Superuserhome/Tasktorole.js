import React from "react";

import { AssignTaskToRole, GetTasks, GetRoles} from "../../api/index";
import Button from 'react-bootstrap/Button';
import './Superuserhome.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Fassignpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Role',
            task: 'Task',
            taskList: [],
            roleList: [],
            tasks:[],
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
  
    handleSubmit = async () => {
        let res = await AssignTaskToRole(this.state.role, this.state.task, );
        alert('Task ' + this.state.task + ' is assigned to ' + this.state.role);
    }

    componentDidMount = () => {
      GetRoles().then((res) => {
          if(res && res.data) {
              let roles = res.data;
              console.log(roles);
              // let foundroles = roles.map(role => role.email);
              // this.setState({ roleList: foundroles});
          }
      });
    }
  
    render() {
      let {taskList, tasks, roleList, task} = this.state;

      return (
        <div className = "container">
          Add Role to User?
          <form onSubmit={this.handleSubmit}>
          <label className="labels">
            <select name = "role" value={this.state.role}
            onChange={this.handleChange.bind(this)}>
              {
                  roleList.length && roleList.map(role => {
                      return <option value={role}>{role}</option>
                  })
              }
            </select>
          </label>
          <label className="labels">
            <select name = "task" value={this.state.task} 
            onChange={this.handleChange.bind(this)}>
              {
                  taskList.length && taskList.map(user => {
                      return <option value={task}>{task}</option>
                  })
              }
            </select>
          </label>
          <div className="labels">
            <Button onClick={(evt) => this.handleSubmit()} className="submitbutton">
                  Submit
            </Button>
          </div>
          </form>
        </div>
      );
    }
  }
