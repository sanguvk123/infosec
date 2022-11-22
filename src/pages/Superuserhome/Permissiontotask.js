import React from "react";

import { AssignTaskToRole, GetTasks, GetRoles, GetTasks2, GetPermissions } from "../../api/index";
import Button from 'react-bootstrap/Button';
import './Superuserhome.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
export default class Fassignpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: 'task',
            permission: 'permission',
            taskList: [],
            permissionList: [],
            tasks: [],
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async () => {
        let res = await AssignPermissionToTask(this.state.task, this.state.permission,);
        alert('Permission ' + this.state.permission + ' is assigned to ' + this.state.task);
    }

    componentDidMount = () => {
        GetTasks2().then((res) => {
            if (res && res.data && res.data.tasks) {
                let tasks = res.data.tasks;
                let tasknames = roles.map(role => role.name);
                this.setState({ taskList: tasknames, tasks: tasks });
                // let foundroles = roles.map(role => role.email);
                // this.setState({ roleList: foundroles});
            }
        });
        GetPermissions().then((res) => {
            if (res && res.data && res.data.permissions) {
                let tasks = res.data.tasks;
                tasks = tasks.map(task => task.name);
                this.setState({ taskList: tasks });
            }
        })
    }

    render() {
        let { taskList, tasks, permissionList } = this.state;

        return (
            <>
                <div className="heading"> Assign Persmission to Tasks</div>
                <div className="master">
                    <div className="user_role">
                        <div className="one_user">
                            <table>
                                {
                                    tasks.length && tasks.map(task => {
                                        return (
                                            <tr> {task.name || ""}
                                                {
                                                    task && task.permission && task.permissions.length > 0 && task.permissions.map(perm => {
                                                        return <th>{perm.name || ""}</th>
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container">
                    Add Permission to Tasks?
                    <form onSubmit={this.handleSubmit}>
                        <label className="labels">
                            <select name="role" value={this.state.task}
                                onChange={this.handleChange.bind(this)}>
                                {
                                    taskList.length && taskList.map(role => {
                                        return <option value={role}>{role}</option>
                                    })
                                }
                            </select>
                        </label>
                        <label className="labels">
                            <select name="task" value={this.state.permission}
                                onChange={this.handleChange.bind(this)}>
                                {
                                    permissionList.length && permissionList.map(task => {
                                        return <option value={task}>{task}</option>
                                    })
                                }
                            </select>
                        </label>
                        <div className="labels">
                            <Button onClick={(evt) => this.handleSubmit()} className="submitbutton">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}
