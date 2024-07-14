import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth/Login.scss"
import { toast } from "react-toastify";
import { postLogin } from "../../services/apiService";
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const handleLogin = async() => {
        // validate
        const isValidateEmail = validateEmail(email)
        if (!isValidateEmail) {
            toast.error("Invalid email");
            return;
        }
        if (!password) {
            toast.error("Invalid password");
            return;
        }
        
        let data = await postLogin(email, password);
        console.log("check res: ",data)
        if(data && data.EC === 0){
            toast.success(data.EM);
            navigate("/")
        }else{
            toast.error(data.EM);
        }
    }
    return (
        <>
            <div className="login-container">
                <div className="header">
                    <span>Don't have an account yet?</span>
                    <button className="btn-sign-up">Sign up</button>
                </div>
                <div className="title col-4 mx-auto">
                    <span>HoiDanIT</span>
                </div>
                <div className="welcome col-4 mx-auto">
                    <span>Hello, who's this?</span>
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
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="forgot">
                        <span>Forgot password?</span>
                    </div>
                    <button
                        className="btn-submit"
                        onClick={() => handleLogin()}
                    >
                        Login to HoiDanIT
                    </button>
                    <div className="text-center">
                        <span onClick={() => { navigate("/") }}> &#60; &#60; Go to Homepage</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;