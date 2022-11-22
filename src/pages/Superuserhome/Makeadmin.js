import React from "react";

import { MakeAdmin, GetUsersAndRoles } from "../../api/index";
import Button from 'react-bootstrap/Button';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from '../Assignpage/navbarelement';
import Signout from "../Assignpage/signoutfunction";

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
        console.log(res);
        alert('User ' + this.state.user + ' is made ' + this.state.type + ' admin');
    }

    componentDidMount = () => {
        GetUsersAndRoles().then((res) => {
            console.log(res);
            if(res && res.data && res.data.users) {
                let foundUsers = res.data.users;
                let foundUserEmails = foundUsers.map(foundUser => foundUser.email);
                this.state.user=foundUserEmails.length>0?foundUserEmails[0]:'User';
                this.setState({ userList: foundUserEmails });
            }
        });
    }
  
    render() {
      let {userList} = this.state;
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
        <div className="contain">
            <h2>Make an user admin of an unit</h2>
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
          <Button onClick={(evt) => this.handleSubmit()}>
                Submit
          </Button>
        </form>
        </div>
        </>
      );
    }
  }
