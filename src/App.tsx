import { Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Data from "./components/Data";

import "react-toastify/dist/ReactToastify.css";
import HeroSection from "./components/Hero";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<HeroSection />}
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
