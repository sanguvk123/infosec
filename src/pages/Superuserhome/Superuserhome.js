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
            Super User Home
            <div className="button-1">
                <Button onClick={navigateToWadmin} class="block" variant="primary" size="lg">
                    Log Into Web Admin
                </Button>{' '}    
            </div>
            <div className="button-1">
                <Button onClick={navigateToVadmin} class="block" variant="primary" size="lg">
                    Log Into Voip Admin
                </Button>{' '}
            </div>
            <div className="button-1">
                <Button onClick={navigateToFadmin} class="block" variant="primary" size="lg">
                    Log Into FTP Admin
                </Button>{' '}
            </div>
            <div  className="button-1">
                <Button onClick={navigateToAddRole} class="block" size="lg">
                    Add Role
                </Button>{' '}
            </div>
            <div  className="button-1">
                <Button onClick={navigateToMakeAdmin} class="block" size="lg">
                    Make User admin of an unit
                </Button>{' '}
            </div>
            <div className="button-1">
                <Button onClick={navigateToAssignTaskToRole} class="block" size="lg">
                    Add tasks to Role
                </Button>{' '}
            </div>
            <div className="button-1">
                <Button onClick={navigateToLogOut} class="block" size="lg">
                    Logout
                </Button>{' '}
            </div>
        </div>
        
    </>
  );
}

export default Superuserhome;