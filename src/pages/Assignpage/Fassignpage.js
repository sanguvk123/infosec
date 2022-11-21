import React from "react";

import { AssignUserToRole, GetUsersAndRoles } from "../../api/index";
import './assignpage.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Fassignpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'Role',
            user: 'User',
            userList: [],
            roleList: []
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

    componentDidMount = () => {
      let id = localStorage.getItem('user_id');
      console.log(id);
      GetUsersAndRoles().then((res) => {
          if(res && res.data && res.data.users) {
              let foundUsers = res.data.users;
              let foundRoles = res.data.roles;
              let foundUserEmails = foundUsers.map(foundUser => foundUser.email);
              let foundUserRoles = foundRoles.map(foundRole => foundRole.role);
              this.setState({ userList: foundUserEmails, roleList: foundUserRoles});
          }
      });
  }
  
    render() {
      let {userList} = this.state;
      let {roleList} = this.state;
      console.log(userList);
      return (
        <div className="master">
          <div className="heading"> FTP Admin Page</div>
          <div className="row">
          <div className="column left">
            <h2>Column 1</h2>
            <p>Some text..</p>
          </div>
          <div className="column right">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
          </div>

          <div className = "container">
            Add Role to User?
            <form onSubmit={this.handleSubmit}>
            <label>
              <select 
              name = "role"
              value={this.state.role}
              onChange={this.handleChange.bind(this)}>
                {
                    roleList.length && roleList.map(role => {
                        return <option value={role}>{role}</option>
                    })
                }
              </select>
            </label>
            <label>
              <select 
              name = "user"
              value={this.state.user} 
              onChange={this.handleChange.bind(this)}>
                {
                    userList.length && userList.map(user => {
                        return <option value={user}>{user}</option>
                    })
                }
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
