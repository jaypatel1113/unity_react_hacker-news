import { Routes, Route, Navigate } from "react-router-dom";

import AuthRoutes from "./components/AuthRoutes";
import Entry from "./components/Entry";
import Data from "./components/Data";

const App: React.FC = () => {
    const isAuthenticated=false;

    return (
        <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/data" /> : <Entry />} />

            <Route element={<AuthRoutes isAuthenticated={isAuthenticated} />}>
                <Route path="/data" element={<Data />} />
            </Route>
        </Routes>
    );
};

export default App;
