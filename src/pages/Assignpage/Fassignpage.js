import React from "react";

import { AssignUserToRole, GetUsersAndRoles, GetRolesForUnit, RemoveUserToRole } from "../../api/index";
import Button from 'react-bootstrap/Button';
import './assignpage.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
export default class Fassignpage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      role: 'Role',
      user: 'User',
      userList: [],
      roleList: [],
      users: [],
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async () => {
    let res = await AssignUserToRole(this.state.role, this.state.user,);
    console.log(res);
    if (res.status === 200)
      alert('Role ' + this.state.role + ' is assigned to ' + this.state.user);
    else
      alert('Failure: ' + res.response.data.message === null ? "Reason unknown" : res.response.data.message);
  }

  handleRemove = async () => {
    let res = await RemoveUserToRole(this.state.role, this.state.user,);
    console.log(res);
    window.location.reload();
    if (res.status === 200)
      alert('Role ' + this.state.role + ' is removed from ' + this.state.user);
    else
      alert('Failure: ' + res.response.data.message === null ? "Reason unknown" : res.response.data.message);

    window.location.reload()
  }
  componentDidMount = () => {
    GetUsersAndRoles().then((res) => {
      if (res && res.data && res.data.users) {
        let foundUsers = res.data.users;
        let foundUserEmails = foundUsers.map(foundUser => foundUser.email);
        this.setState({ userList: foundUserEmails });
      }
    });
    GetRolesForUnit("ftpadmin").then((res) => {
      if (res && res.data && res.data.users) {
        let foundRoles = res.data.unitRoles;
        let foundRoleslist = foundRoles.map(found => found.name);
        this.setState({ roleList: foundRoleslist });
        this.setState({ users: res.data.users });
      }
    });
  }

  render() {
    let { userList, users, roleList } = this.state;
    console.log(userList);
    console.log(roleList);

    return (
      <>
        <div className="heading"> FTP Admin Page</div>
        <div className="master">
          <div className="user_role">
            <div className="one_user">
              <table>
                {
                  users.length && users.map(user => {
                    return (
                      <tr> {user.email || ""}
                        {
                          user && user.role && user.role.length > 1 && user.role.map(role => {
                            return <th>{role.name || ""}</th>
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
          Add Role to User?
          <form onSubmit={this.handleSubmit}>
            <label className="labels">
              <select name="role" value={this.state.role}
                onChange={this.handleChange.bind(this)}>
                {
                  roleList.length && roleList.map(role => {
                    return <option value={role}>{role}</option>
                  })
                }
              </select>
            </label>
            <label className="labels">
              <select name="user" value={this.state.user}
                onChange={this.handleChange.bind(this)}>
                {
                  userList.length && userList.map(user => {
                    return <option value={user}>{user}</option>
                  })
                }
              </select>
            </label>
            <div className="labels">
              <Button onClick={(evt) => this.handleSubmit()} className="submitbutton">
                Add Role
              </Button>
              <Button onClick={(evt) => this.handleRemove()} className="submitbutton">
                Remove Role
              </Button>
            </div>
          </form>
        </div>
      </>

    );
  }
}
