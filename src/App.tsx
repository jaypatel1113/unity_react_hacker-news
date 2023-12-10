import { Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Data from "./components/Data";

import "react-toastify/dist/ReactToastify.css";
import Search from "./components/ui/Search";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Search />}
                />

                {/* <Route element={<AuthRoutes />}> */}
                    <Route path="/:id" element={<Data />} />
                {/* </Route> */}
            </Routes>
            <ToastContainer />
        </>
    );
};

export default App;
