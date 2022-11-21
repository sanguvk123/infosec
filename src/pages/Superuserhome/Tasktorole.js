import React from "react";

import { AssignTaskToRole } from "../../api/index";
import '../Assignpage/assignpage.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
export default class TaskToRole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Role'
        }
        this.state = {
            task: 'Task'
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
  
    handleSubmit = async () => {
        alert('Role ' + this.state.role + ' is assigned to ' + this.state.task);
        let res = await AssignTaskToRole(this.role, this.task);
    //   event.preventDefault();
    }
  
    render() {
      return (

        <div className="master">
          <div className="heading"> Assign Tasks to role</div>
          <div className="container">
          Add Task to Role?
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
              name = "Task"
              value={this.state.Task} 
              onChange={this.handleChange.bind(this)}>
                <option value="Task1">Task1</option>
                <option value="Task2">Task2</option>
                <option value="Task3">Task3</option>
                <option value="Task4">Task4</option>
              </select>
            </label>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
        </div>
      );
    }
  }
