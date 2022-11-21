import React from "react";

import { AssignUserToRole, GetUsersAndRoles, GetRolesForUnit } from "../../api/index";
import Button from 'react-bootstrap/Button';
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
        let res = await AssignUserToRole(this.role, this.user);
        alert('Role ' + this.state.role + ' is assigned to ' + this.state.user);
    }

    componentDidMount = () => {
      GetUsersAndRoles().then((res) => {
          if(res && res.data && res.data.users) {
              let foundUsers = res.data.users;
              let foundUserEmails = foundUsers.map(foundUser => foundUser.email);
              this.setState({ userList: foundUserEmails});
          }
      });
      GetRolesForUnit("FTPAdmin").then((res) => {
        console.log('heloo73767637rjirtehjrt6')
        console.log(res.data);
        if (res && res.data && res.data.users) {
          let foundRoles = res.data.unitRoles;
          let foundRoleslist = foundRoles.map(found => found.name);
          // let foundUserRoles = foundRoles.map(foundRole => foundRole.role);
          this.setState({ roleList: foundRoleslist });
        }
      });
  }
  
    render() {
      let {userList} = this.state;
      let {roleList} = this.state;
      console.log(userList);
      console.log(roleList);

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
            <Button onClick={(evt) => this.handleSubmit()} variant="primary" size="lg">
                  Submit
            </Button>
        </form>
        </div>
        </div>
        
        
      );
    }
  }
