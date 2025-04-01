import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const GoogleAuthHandler = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("token");

        if (token) {
            localStorage.setItem("jwtToken", token);  // ✅ Token store kar diya
            navigate("/", {state: {lginSuccess: true}});  // ✅ Home page pe redirect
        }
    }, [location, navigate]);

    return <p>Logging in...</p>;
};

export default GoogleAuthHandler;
