import {Route, Routes } from 'react-router-dom';
import App from './App.js';
import User from './components/User/User.js';
import Admin from './components/Admin/Admin.js';
import HomePage from './components/Home/HomePage.js';
import ManageUser from './components/Admin/Content/ManageUser.js';
import DashBoard from './components/Admin/Content/Dashboard.js';
import Login from './components/Auth/Login.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register.js';

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="users" element={<User />} />
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/admins" element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
        </>
    )
}
export default Layout;
