import React from "react";

import { AssignUserToRole, GetUsersAndRoles, GetRolesForUnit, RemoveUserToRole } from "../../api/index";
import './assignpage.css';
import Button from 'react-bootstrap/Button';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from './navbarelement';
import Signout from "./signoutfunction";
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
    console.log('checkherrrrrrrrrrrrrrrr')
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
    GetRolesForUnit("webadmin").then((res) => {
      if (res && res.data && res.data.users) {
        let foundRoles = res.data.unitRoles;
        let foundRoleslist = foundRoles.map(found => found.name);
        this.state.role=foundRoleslist.length>0?foundRoleslist[0]:'Role';
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
        <div className="master">

          <div className="heading"> Web Admin Page</div>
          <div className="row">
            <div className="App">
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

          <div className="container">
            Add Role to User?
            <form onSubmit={this.handleSubmit}>
              <label className="labels">
                <select
                  name="role"
                  value={this.state.role}
                  onChange={this.handleChange.bind(this)}>
                  {
                    roleList.length && roleList.map(role => {
                      return <option value={role}>{role}</option>
                    })
                  }
                </select>
              </label>
              <label className="labels">
                <select
                  name="user"
                  value={this.state.user}
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
                  Submit
                </Button>
                <Button onClick={(evt) => this.handleRemove()} className="submitbutton">
                  Remove Role
                </Button>
              </div>
            </form>
          </div>
        </div>
      </>


    );
  }
}
