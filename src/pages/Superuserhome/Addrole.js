import React from "react";
import '../Home/Basichome.css';
import { AddRole } from "../../api/index";
import Button from 'react-bootstrap/Button';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from '../Assignpage/navbarelement';
import Signout from "../Assignpage/signoutfunction";

export default class Addrole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'Type',
            role: 'Role name'
        }
    }

    handleChange(e) {
        console.log(e.target);
        this.setState({ [e.target.name] : e.target.value });
    }
  
    handleSubmit = async (e) => {
        this.setState({ [e.target.name] : e.target.value });
        let res = await AddRole(this.state.type, this.state.role);
        console.log(res);
        alert('Role ' + this.state.role + ' added to ' + this.state.type + ' admin.');
    //   event.preventDefault();
    }
  
    render() {
      this.handleChange.bind(this);
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
            <h2>Add new roles to units</h2>
        <form>
          <label>
            <select 
            name = "type"
            value={this.state.type}
            onChange={this.handleChange.bind(this)}>
              <option value="webadmin">Web Admin</option>
              <option value="voipadmin">VoIPAdmin</option>
              <option value="ftpadmin">FTPAdmin</option>
            </select>
          </label>
          <label>
            <input
                type="text"
                name="role"
                value={this.state.role}
                onChange={(evt) => this.handleChange(evt)}
                placeholder="Enter Role"
            />
          </label>
          <Button onClick={(evt) => this.handleSubmit(evt)}>
                Submit
          </Button>
        </form>
                  
        </div>
        </>
      );
    }
  }
