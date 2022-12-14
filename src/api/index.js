import axios from "axios";

const api = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});


export const Get = async (url) => {
    let res = await api.get(url);
    return res;
};

export const Post = async (url, data) => {
    let res = await api.post(url, data);
    return res;
};


// Sign up
export const SignUp = async (email, password) => {
    let signupUrl = "http://localhost:3000/user/signup";
    let res = await axios.post(signupUrl, { email: email, password: password });
    console.log(res)
    if (res && res.data && res.data.userId) {
        await localStorage.setItem('User_id', res.data.userId);
        await localStorage.setItem('User_unit', res.data.unit);
    }
    localStorage.getItem('User_id');
    return res;
}

// Log In
export const Login = async (email, password) => {
    let loginUrl = "http://localhost:3000/user/login";
    try {

        let res = await axios.post(loginUrl, { email: email, password: password });
        console.log('error in loginnnnnnnnnnnnnnnnnnn3333333333333ddddddddddddddddd333');
        console.log(res)
        if (res && res.data && res.data.userId) {
            await localStorage.setItem('User_id', res.data.userId);
            await localStorage.setItem('User_unit', res.data.unit);
        }
        localStorage.getItem('User_id');
        return res;

    } catch (e) {
        console.log('error in loginnnnnnnnnnnnnnnnnnn3333333333333333');
        return "Wrong email or password";
    }

}


// Web/VoIP/FTP Admins can assign user to roles
export const AssignUserToRole = async (role, user) => {
    try {
        let assignUserToRoleUrl = "http://localhost:3000/adminUnit/userRoleAssignment";
        let res = await axios.post(assignUserToRoleUrl, { roleName: role, userName: user, userId: localStorage.getItem('User_id') }).catch(err => {
            if (err.response.status === 500) {
                throw err;
            }
            throw err;
        });
        return res;

    } catch (e) {
        return e;
    }

}

export const RemoveUserToRole = async (role, user) => {
    let removeUserToRoleUrl = "http://localhost:3000/adminUnit/userRoleRemoval";
    try {
        let res = await axios.post(removeUserToRoleUrl, { roleName: role, userName: user, userId: localStorage.getItem('User_id') }).catch(err => {
            if (err.response.status === 500) {
                throw err;
            }
            throw err;
        });
        return res;

    } catch (e) {
        return e;
    }


}


// Super user adds roles
export const AddRole = async (type, role) => {
    let userid = await localStorage.getItem('User_id');
    let AddRoleUrl = "http://localhost:3000/superAdmin/roleAdminUnitAssignment";
    let res = await axios.post(AddRoleUrl, { userId: userid, adminUnitName: type, roleName: role });
    return res;
}


// Super user can chooses user to make Web/VoIP/FTP admins.
export const MakeAdmin = async (user, type) => {
    let userid = await localStorage.getItem('User_id');
    let MakeAdminUrl = 'http://localhost:3000/superAdmin/userAdminUnitAssignment';
    let res = await axios.post(MakeAdminUrl, { userId: userid, userName: user, adminUnitName: type });
    return res;
}

export const GetUsersAndRoles = async (unit) => {
    let url = `http://localhost:3000/adminUnit/adminUnitInfo/${unit}`;
    let res = await axios.get(url, { params: { unit: unit } });
    return res;
}

export const GetRolesForUnit = async (unit) => {
    let url = `http://localhost:3000/adminUnit/adminUnitInfo/${unit}`;
    console.log(unit);
    let res = await axios.get(url, { params: { unit: unit } });
    return res;
}

export const AssignTaskToRole = async (role, task) => {
    let userid = await localStorage.getItem('User_id');
    let assignTaskToRoleUrl = "http://localhost:3000/superAdmin/roleTaskAssignment";
    let res = await Post(assignTaskToRoleUrl, { userId: userid, roleName: role, taskName: task });
    return res;
}
export const GetTasks2 = async () => {
    let userid = await localStorage.getItem('User_id');
    console.log('gettask222222222222222222222222');
    let url = `http://localhost:3000/superAdmin/getTasks`;
    let res = await axios.post(url, { userId: userid });
    console.log('ggggggggujuuuuuuuuuuuuu');
    console.log(res);
    return res;
}

export const GetPermissions = async () => {
    let userid = await localStorage.getItem('User_id');
    console.log('getpermissionsssssssssssssssssssssssssssssssss');
    let url = `http://localhost:3000/superAdmin/getPermissions`;
    let res = await axios.post(url, { userId: userid });
    return res;
}

export const AssignPermissionToTask = async (task, perm) => {
    let userid = await localStorage.getItem('User_id');
    console.log('assignpermytotaskkkkkkkkkkkkkkkkkkkkkk');
    let assignpermissiontotask = "http://localhost:3000/superAdmin/taskPermissionAssignment";
    let res = await Post(assignpermissiontotask, { userId: userid, taskName: task, permissionName: perm });
    console.log('submittttttttttttttttttt');
    console.log(res);
    return res;
}

export const GetRoles = async () => {
    let userid = await localStorage.getItem('User_id');
    let url = `http://localhost:3000/superAdmin/getRoles`;
    let res = await axios.post(url, { userId: userid });
    return res;
}

export const GetTasks = async () => {
    let userid = await localStorage.getItem('User_id');
    let url = `http://localhost:3000/superAdmin/getTasks`;
    let res = await axios.post(url, { userId: userid });
    return res;
}


export const GetUserInfo = async (id) => {
    let url = `http://localhost:3000/user/userInfo/${id}`;
    let res = await axios.get(url, { params: { id: id } });
    console.log(res);
    return res;
}


