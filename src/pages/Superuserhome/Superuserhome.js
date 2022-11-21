import React from 'react';
import './Superuserhome.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from 'react-router-dom';

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
    const navigateToLogOut = () => {
        localStorage.removeItem("User_id");
        localStorage.removeItem("User_unit");
        navigate('/');
    };

    return (
        <>
            <div className="container">
                <div className="vertical-center">
                    <Button onClick={navigateToWadmin} variant="primary" size="lg">
                        Log Into Web Admin
                    </Button>{' '}
                    <Button onClick={navigateToVadmin} variant="primary" size="lg">
                        Log Into Voip Admin
                    </Button>{' '}
                    <Button onClick={navigateToFadmin} variant="primary" size="lg">
                        Log Into FTP Admin
                    </Button>{' '}

                    <Button onClick={navigateToAddRole} size="lg">
                        Add Role
                    </Button>{' '}
                    <Button onClick={navigateToMakeAdmin} size="lg">
                        Make User admin of an unit
                    </Button>{' '}

                    <Button onClick={navigateToAssignTaskToRole} size="lg">
                        Add tasks to Role
                    </Button>{' '}

                    <Button onClick={navigateToLogOut} size="lg">
                        Logout
                    </Button>{' '}
                </div>
            </div>

        </>
    );
}

export default Superuserhome;