import React from "react";

import { MakeAdmin, GetUsersAndRoles } from "../../api/index";
import Button from 'react-bootstrap/Button';

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
        let res = await MakeAdmin(this.state.user, this.state.type);
        alert('User ' + this.state.user + ' is made ' + this.state.type + ' admin');
        console.log(res);
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
        <form>
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
          <Button onClick={(evt) => this.handleSubmit()} variant="primary" size="lg">
                Submit
          </Button>
        </form>
      );
    }
  }
