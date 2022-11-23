import React from 'react';
import './Superuserhome.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
  } from '../Assignpage/navbarelement';
  import Signout from "../Assignpage/signoutfunction";

import {useNavigate } from 'react-router-dom';

function Superuserhome() {
    const navigate = useNavigate();

    const navigateToWadmin = () => {
        navigate('/wassignpage');
    };

    const navigateToVadmin = () => {
        navigate('/vassignpage');
    };

    const navigateToFadmin = () => {
        navigate('/fassignpage');
    };

    const navigateToAddRole = () => {
        navigate('/superhome/addrole');
    };

    const navigateToMakeAdmin = () => {
        navigate('/superhome/makeadmin');
    };
    const navigateToAssignTaskToRole = () => {
        navigate('/assigntasktorole');
    };
    const navigateToAssignPermissionToTask = () => {
        navigate('/assignpermissiontotask');
    };
    const navigateToLogOut = () => {
        localStorage.removeItem("User_id");
        localStorage.removeItem("User_unit");
        navigate('/');
    };

    return (
        <>
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink to='/superhome' activeStyle>
              <b>Home</b>
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
            <div className="superhomebuttons">
                <div className="heading">
                    Super User Home
                </div>
                <Button onClick={navigateToWadmin} className="block">
                    Web Admin
                </Button>{' '}
                <Button onClick={navigateToVadmin} className="block">
                    Voip Admin
                </Button>{' '}
                <Button onClick={navigateToFadmin} className="block">
                    FTP Admin
                </Button>{' '}
                <Button onClick={navigateToAddRole} className="block">
                    Add Role
                </Button>{' '}
                <Button onClick={navigateToMakeAdmin} className="block">
                    Make User admin of an unit
                </Button>{' '}
                <Button onClick={navigateToAssignPermissionToTask} className="block">
                    Add Permissions to Task
                </Button>{' '}
                <Button onClick={navigateToAssignTaskToRole} className="block">
                    Add Tasks to Role
                </Button>{' '}
                <Button onClick={navigateToLogOut} className="block">
                    Logout
                </Button>{' '}
            </div>

        </>
    );
}

export default Superuserhome;