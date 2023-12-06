import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { showToast } from "./Toast";
import useAuth from "../hooks/useAuth";

const AuthRoutes = () => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if(!isAuthenticated) {
            showToast("error", "You must fill in details before accessing the page.");
        }
        console.log("isAuthenticated", isAuthenticated);
        
    }, [isAuthenticated]);

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthRoutes;
