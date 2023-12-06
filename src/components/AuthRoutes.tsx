import { Outlet, Navigate } from "react-router-dom";

interface AuthRoutesProps {
    isAuthenticated: boolean;
}

const AuthRoutes = ({ isAuthenticated }: AuthRoutesProps) => {
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default AuthRoutes;
