import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { showToast } from "../utils/toast";
import useAuth from "../hooks/useLocalStorage";

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
