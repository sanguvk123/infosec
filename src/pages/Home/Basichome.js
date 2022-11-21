import React from 'react'
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
                if(res.data.tasks) {
                    this.setState({ tasks: res.data.tasks });
                }
            }
        });
    }

    render() {
        const { roles, operations, tasks } = this.state;
        return(
        <div className="contain">
            <div>
                <h1>You belong to the roles listed below: </h1>
                {
                    roles.length && roles.map((role) => {
                        return <h3>{role.name}</h3>
                    })
                }
            </div>
            <div>
                <h1>Operations you can perform : </h1>
                {
                    operations.length && operations.map((operation) => {
                        return <h3>{operation}</h3>
                    })
                }
            </div>
            <div>
                <h1>Tasks you can perform : </h1>
                {
                    tasks.length && tasks.map((task) => {
                        return <h3>{task}</h3>
                    })
                }
            </div>
        </div>
        );
    }
}
