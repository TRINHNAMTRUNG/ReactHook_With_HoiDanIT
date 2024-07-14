import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Register.scss"
import { toast } from "react-toastify";
import { postRegister } from "../../services/apiService";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async () => {
        // validate
        const isValidateEmail = validateEmail(email)
        if (!isValidateEmail) {
            toast.error("Invalid email");
            return;
        }
        if (!username) {
            toast.error("Invalid username");
            return;
        }
        if (!password) {
            toast.error("Invalid password");
            return;
        }
        if (!checked) {
            toast.error("Please accept the terms");
            return;
        }

        let data = await postRegister(email, username, password);
        console.log("check res: ", data)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate("/login")
        } else {
            toast.error(data.EM);
        }
    }
    return (
        <>
            <div className="register-container">
                <div className="header">
                    <span>Already have an account?</span>
                    <button
                        className="btn-login"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div>
                <div className="title col-4 mx-auto">
                    <span>HoiDanIT</span>
                </div>
                <div className="welcome col-4 mx-auto">
                    <span>Get better data with conversational forms, surveys, quizzes & more.</span>
                </div>
                <div className="content-form col-4 mx-auto">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="wrap-password">
                            <input
                                type= {showPassword ? "text" : "password"} 
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="eye-icon-password" onClick={()=> setShowPassword(!showPassword)}>
                                {showPassword ? <IoEye /> : <IoEyeOff />}
                            </span>
                        </div>
                    </div>
                    <div className="forgot">
                        <Form>
                            <Form.Check // prettier-ignore
                                type="checkbox"
                                id={`default-checkbox`}
                                label={`I agree to Typeform’s Terms of Service, Privacy Policy and Data Processing Agreement.`}
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                            />
                        </Form>
                    </div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >
                        Create my free account
                    </button>
                    <div className="text-center">
                        <span onClick={() => { navigate("/") }}> &#60; &#60; Go to Homepage</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;