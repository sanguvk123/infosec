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
            taskList: [],
            roleList: [],
            roles:[],
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
          if(res && res.data && res.data.roles) {
              let roles = res.data.roles;
              let roleNames = roles.map(role => role.name);
              this.setState({roleList: roleNames, roles: roles});
              // let foundroles = roles.map(role => role.email);
              // this.setState({ roleList: foundroles});
          }
      });
      GetTasks().then((res) => {
        if(res && res.data && res.data.tasks) {
          let tasks = res.data.tasks;
          tasks = tasks.map(task => task.name);
          this.setState({taskList: tasks});
        }
      })
    }
  
    render() {
      let {taskList, tasks, roleList, roles} = this.state;

      return (
        <>
        <div className="heading"> Assign Tasks to Role</div>
        <div className="master">
          <div className="user_role">
            <div className="one_user">
              <table>
                {
                  roles.length && roles.map(role => {
                    return (
                      <tr> {role.name || ""}
                        {
                          role && role.tasks && role.tasks.length > 0 && role.tasks.map(task => {
                            return <th>{task.name || ""}</th>
                          })
                        }
                      </tr>
                    )
                  })
                }
              </table>
            </div>
          </div>
        </div>
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
                  taskList.length && taskList.map(task => {
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
        </>
      );
    }
  }
