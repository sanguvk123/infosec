import axios from "axios";

const api = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
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
    let res = await axios.post(signupUrl, {email: email, password: password});
    console.log(res)
    if(res && res.data && res.data.userId) {
        localStorage.setItem('User_id', res.data.userId);
    }
    localStorage.getItem('User_id');
    return res;
}

// Log In
export const Login = async (email, password) => {
    let loginUrl = "http://localhost:3000/user/login";
    let res = await axios.post(loginUrl, {email: email, password: password});
    console.log(res)
    if(res && res.data && res.data.userId) {
        localStorage.setItem('User_id', res.data.userId);
    }
    localStorage.getItem('User_id');
    return res;
}


// Web/VoIP/FTP Admins can assign user to roles
export const AssignUserToRole = async (role, user) => {
    let assignUserToRoleUrl = "http://localhost:3000/adminUnit/adminUnitInfo/userRoleAssignment";
    let res = await axios.post(assignUserToRoleUrl, {role: role, user: user});
    return res;
}


// Super user adds roles
export const AddRole = async (type, role) => {
    let AddRoleUrl = "http://localhost:3000/superAdmin/roleAdminUnitAssignment";
    let res = await axios.post(AddRoleUrl, {adminUnitName: type, roleName: role});
    return res;
}


// Super user can chooses user to make Web/VoIP/FTP admins.
export const MakeAdmin = async (user, type) => {
    let MakeAdminUrl = 'http://localhost:3000/superAdmin/userAdminUnitAssignment';
    let res = await axios.post(MakeAdminUrl, {userName: user, adminUnitName: type});
    return res;
}

export const GetUsersAndRoles = async (unit) => {
    let url = `http://localhost:3000/adminUnit/adminUnitInfo/${unit}`;
    let res = await axios.get(url, { params: { unit: unit} });
    return res;
}

export const GetRolesForUnit = async (unit) => {
    let url = `http://localhost:3000/adminUnit/adminUnitInfo/${unit}`;
    console.log(unit);
    let res = await axios.get(url, { params: { unit: unit} });
    return res;
}

export const AssignTaskToRole = async (role, task) => {
    let assignTaskToRoleUrl = "";
    let res = await Post(assignTaskToRoleUrl, {role: role, task: task});
    return res;
}
