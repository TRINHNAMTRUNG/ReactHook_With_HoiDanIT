import { useSelector } from "react-redux";
import videohomepage from "../../assets/video-homepage.mp4"
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
    const isAuthenticated = useSelector((state)=> state.user.isAuthenticated);
    const navigate = useNavigate();
    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source
                    src={videohomepage}
                    type="video/mp4"
                />
            </video>
            <div className="homepage-content">
                <div className="title-1">There's better way to ask</div>
                <div className="title-2">You don't want to make a boring form.
                    And your audience won't answer one.
                    Create a typeform instead-and make every one happy.
                </div>
                <div className="title-3">
                    {isAuthenticated ?
                        <button onClick={()=> navigate("/users")}>Doing Quiz Now</button>
                        :
                        <button onClick={()=> navigate("/login")}>Get's started. It's free</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage;