import axios from '../utils/axiosCustomize';
const postCreateUser = (email, username, password, role, image) => {

    const data = new FormData();
    data.append('email', email);
    data.append('username', username);
    data.append('password', password);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data);
}
const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
}
const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('username', username);
    data.append('id', id);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data);
}
const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
}
const getUserWithPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
}
const postLogin = (email, password) => {
    return axios.post(`api/v1/login`, {email: email, password: password});
}
const postRegister = (email, username, password) => {
    return axios.post(`api/v1/register`, {email: email, password: password, username: username});
}

export {
    postCreateUser, getAllUsers, putUpdateUser,
    deleteUser, getUserWithPaginate, postLogin, 
    postRegister
};