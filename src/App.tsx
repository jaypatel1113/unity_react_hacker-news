import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthRoutes from "./components/AuthRoutes";
import Entry from "./components/Entry";
import Data from "./components/Data";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    // element={isAuthenticated ? <Navigate to="/data" /> : <Entry />}
                    element={<Entry />}
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
