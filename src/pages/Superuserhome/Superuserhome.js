import React from 'react';
import './Superuserhome.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route, useNavigate} from 'react-router-dom';

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
        navigate('/addrole');
    };

    const navigateToMakeAdmin = () => {
        navigate('/makeadmin');
    };
    const navigateToAssignTaskToRole = () => {
        navigate('/assigntasktorole');
    };
    const navigateToLogOut = () => {
        localStorage.removeItem("User_id");
        navigate('/');
    };

  return (
    <>
        <div className="superhomebuttons">
            <div className="heading">
                Super User Home
            </div>
            <Button onClick={navigateToWadmin} className="block">
                Log Into Web Admin
            </Button>{' '}    
            <Button onClick={navigateToVadmin} className="block">
                Log Into Voip Admin
            </Button>{' '}
            <Button onClick={navigateToFadmin} className="block">
                Log Into FTP Admin
            </Button>{' '}
            <Button onClick={navigateToAddRole} className="block">
                Add Role
            </Button>{' '}
            <Button onClick={navigateToMakeAdmin} className="block">
                Make User admin of an unit
            </Button>{' '}
            <Button onClick={navigateToAssignTaskToRole} className="block">
                Add tasks to Role
            </Button>{' '}
            <Button onClick={navigateToLogOut} className="block">
                Logout
            </Button>{' '}
        </div>
        
    </>
  );
}

export default Superuserhome;