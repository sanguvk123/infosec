import React from "react";

import { MakeAdmin, GetUsersAndRoles } from "../../api/index";

import {Routes, Route, useNavigate} from 'react-router-dom';
export default class Makeadmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Type',
            user: "User",
            userList: []
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
     }
  
    handleSubmit = async () => {
        alert('User ' + this.state.user + ' is made ' + this.state.type + ' admin');
        let res = await MakeAdmin(this.user, this.type);
        console.log(res);
    //   event.preventDefault();
    }

    componentDidMount = () => {
        GetUsersAndRoles().then((res) => {
            console.log(res);
            if(res && res.data && res.data.users) {
                let foundUsers = res.data.users;
                let foundUserEmails = foundUsers.map(foundUser => foundUser.email);
                this.setState({ userList: foundUserEmails });
            }
        });
    }
  
    render() {
      let {userList} = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <select 
            name = "type"
            value={this.state.type}
            onChange={this.handleChange.bind(this)}>
              <option value="webadmin">Web Admin</option>
              <option value="voipadmin">VoIP Admin</option>
              <option value="ftpadmin">FTP Admin</option>
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
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
