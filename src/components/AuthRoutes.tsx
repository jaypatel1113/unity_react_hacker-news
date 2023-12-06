import { useEffect } from "react";
import { Navigate,Outlet } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import { showToast } from "../utils";

const AuthRoutes = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if(!isAuthenticated) {
            showToast({message: "You must fill in details before accessing the page.", variant: "error"});
        }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthRoutes;
