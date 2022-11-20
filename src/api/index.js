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
export const Signup = async (email, password) => {
    let signupUrl = "";
    let res = await Post(signupUrl, {email: email, password: password});
    return res;
}


// Web/VoIP/FTP Admins can assign user to roles
export const AssignUserToRole = async (role, user) => {
    let assignUserToRoleUrl = "";
    let res = await Post(assignUserToRoleUrl, {role: role, user: user});
    return res;
}


// Super user adds roles
export const AddRole = async (type, role) => {
    let AddRoleUrl = "";
    let res = await Post(AddRoleUrl, {type: type, role: role});
    return res;
}


// Super user can chooses user to make Web/VoIP/FTP admins.
export const MakeAdmin = async (type, user) => {
    let MakeAdminUrl = "";
    let res = await Post(MakeAdminUrl, {type: type, user: user});
    return res;
}
