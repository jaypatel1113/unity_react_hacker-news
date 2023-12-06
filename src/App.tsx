import { Routes, Route, Navigate } from "react-router-dom";

import AuthRoutes from "./components/AuthRoutes";
import Entry from "./components/Entry";
import Data from "./components/Data";
import useAuth from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <Navigate to="/data" /> : <Entry />}
                />

                <Route element={<AuthRoutes />}>
                    <Route path="/data" element={<Data />} />
                </Route>
            </Routes>
            <ToastContainer />
        </>
    );
};

export default App;
