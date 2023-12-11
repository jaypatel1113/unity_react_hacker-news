import { Route,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Data from "./components/suspense/Data";
import Home from "./components/suspense/Home";

import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Data />} />
            </Routes>
            <ToastContainer />
        </>
    );
};

export default App;
