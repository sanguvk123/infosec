import React from 'react'
import { GetUserInfo} from "../../api/index";
import './Basichome.css';

import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
  } from '../Assignpage/navbarelement';
  import Signout from "../Assignpage/signoutfunction";

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
        let id = localStorage.getItem("User_id");
        console.log(id);
        GetUserInfo(id).then((res) => {
            if(res && res.data) {
                if(res.data.roles) {
                    this.setState({ roles: res.data.roles });
                }
                if(res.data.operations) {
                    this.setState({ operations: res.data.operations });
                }
                // if(res.data.tasks) {
                //     this.setState({ tasks: res.data.tasks });
                // }
            }
        });
    }

    render() {
        const { roles, operations, tasks } = this.state;
        return(
        <>
        <Nav>
          <Bars />

          <NavMenu>
            <NavLink to='/about' activeStyle>
              About
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
            <div className="inner-contain">
                <h1>You belong to the roles listed below: </h1>
                {
                    roles.length && roles.map((role) => {
                        return <>{role.name + ", "}</>
                    })
                }
            </div>
            <div className="inner-contain">
                <h1>Operations you can perform : </h1>
                {
                    operations.length && operations.map((operation) => {
                        return <>{operation.name + ", "}</>
                    })
                }
            </div>
            <div className="inner-contain">
                <h1>Tasks you can perform : </h1>
                {
                    tasks.length && tasks.map((task) => {
                        return <>{task.name}</>
                    })
                }
            </div>
        </div>
        </>
        );
    }
}
