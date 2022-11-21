import React, { useState } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from "../../api/index";
import { GetUserInfo} from "../../api/index";

export default class BasicHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roles:[],
            operations:[],
            tasks:[],
        }
    }

    componentDidMount = () => {
        let id = localStorage.removeItem("User_id");
        let id1 = "637b2b2529817e85682317be";
        console.log(id1);
        GetUserInfo(id1).then((res) => {
            if(res && res.data && res.data.roles) {
                console.log(res);
            }
        });
    }

    render() {
        return(
        <>
        Basic Home
        </>
        );
    }
}
