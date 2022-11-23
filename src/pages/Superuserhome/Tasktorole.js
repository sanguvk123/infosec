import React from "react";

import { AssignTaskToRole, GetTasks, GetRoles } from "../../api/index";
import Button from 'react-bootstrap/Button';
import './Superuserhome.css';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from '../Assignpage/navbarelement';
import Signout from "../Assignpage/signoutfunction";
export default class Fassignpage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      role: 'Role',
      taskList: [],
      roleList: [],
      roles: [],
      task: 'task',
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async () => {
    let res = await AssignTaskToRole(this.state.role, this.state.task,);
    console.log(res);
    alert('Task ' + this.state.task + ' is assigned to ' + this.state.role);
  }

  componentDidMount = () => {
    GetRoles().then((res) => {
      if (res && res.data && res.data.roles) {
        let roles = res.data.roles;
        let roleNames = roles.map(role => role.name);
        this.setState({ roleList: roleNames, roles: roles });
        // let foundroles = roles.map(role => role.email);
        // this.setState({ roleList: foundroles});
      }
    });
    GetTasks().then((res) => {
      if (res && res.data && res.data.tasks) {
        let tasks = res.data.tasks;
        tasks = tasks.map(task => task.name);
        this.state.task=tasks.length>0?tasks[0]:'task';
        this.setState({ taskList: tasks });
      }
    })
  }

  render() {
    let { taskList, roleList, roles } = this.state;

    return (
      <>
      <Nav>
          <Bars />

          <NavMenu>
            <NavLink to='/basichome' activeStyle>
              Home
            </NavLink>
            <NavLink to='/events' activeStyle>
              Events
            </NavLink>
            <NavLink to='/annual' activeStyle>
              Annual Report
            </NavLink>
            <NavLink to='/team' activeStyle>
              Teams
            </NavLink>
            <NavLink to='/blogs' activeStyle>
              Blogs
            </NavLink>
            {/* <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink> */}
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <Signout />
            {/* <NavBtnLink onClick={this.navigateToLogOut}>Sign out</NavBtnLink> */}
          </NavBtn>
        </Nav>
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
        <div className="container">
          Add Task to Role?
          <form onSubmit={this.handleSubmit}>
            <label className="labels">
              <select name="role" value={this.state.role}
                onChange={this.handleChange.bind(this)}>
                {
                  roleList.length && roleList.map(role => {
                    return <option value={role}>{role + " -> "}</option>
                  })
                }
              </select>
            </label>
            <label className="labels">
              <select name="task" value={this.state.task}
                onChange={this.handleChange.bind(this)}>
                {
                  taskList.length && taskList.map(task => {
                    return <option value={task}>{task + ", "}</option>
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
