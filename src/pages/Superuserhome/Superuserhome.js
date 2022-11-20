import React from 'react';
import './Superuserhome.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route, useNavigate} from 'react-router-dom';

function Superuserhome() {
    const navigate = useNavigate();

    const navigateToWadmin = () => {
    // 👇️ navigate to /Wadmin
        navigate('/wassignpage');
    };

    const navigateToVadmin = () => {
    // 👇️ navigate to /Wadmin
        navigate('/vassignpage');
    };

    const navigateToFadmin = () => {
    // 👇️ navigate to /Wadmin
        navigate('/fassignpage');
    };

    const navigateToAddRole = () => {
    // 👇️ navigate to /Wadmin
        navigate('/addrole');
    };

    const navigateToMakeAdmin = () => {
    // 👇️ navigate to /Wadmin
        navigate('/makeadmin');
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
            Add Role
            </Button>{' '}
            </div>
        </div>
        
    </>
  );
}

export default Superuserhome;