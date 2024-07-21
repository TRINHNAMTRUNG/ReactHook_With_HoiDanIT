import { Route, Routes, useNavigate } from 'react-router-dom';
import App from './App.js';
import Admin from './components/Admin/Admin.js';
import HomePage from './components/Home/HomePage.js';
import ManageUser from './components/Admin/Content/ManageUser.js';
import DashBoard from './components/Admin/Content/Dashboard.js';
import Login from './components/Auth/Login.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Auth/Register.js';
import ListQuiz from './components/User/ListQuiz.js';
import DetailQuiz from './components/User/DetailQuiz.js';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                </p>
                <button className="btn btn-primary" onClick={()=> navigate("/")}>Go Home</button>
            </div>
        </div>
    )
}
const Layout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="users" element={<ListQuiz />} />
                    <Route index element={<HomePage />} />
                </Route>
                <Route path="/quiz/:id" element={<DetailQuiz />} />
                <Route path="/admins" element={<Admin />} >
                    <Route index element={<DashBoard />} />
                    <Route path="manage-user" element={<ManageUser />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
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
