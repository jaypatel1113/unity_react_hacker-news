import React, { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

import useAuth from "../hooks/useAuth";

import CustomButton from "./ui/Button";

const PostList = lazy(() => import("./PostList"));
const DepartmentList = lazy(() => import("./DepartmentList"));

const Data: React.FC = (): React.ReactNode => {
    const navigate = useNavigate();
    const { clearAuthenticatedUser } = useAuth();

    const clearData = () => {
        clearAuthenticatedUser();
        navigate("/");
    }

    return (
        <Container maxWidth="xl">
            <Suspense fallback={<div>Loading Posts Component...</div>}>
                <PostList />
            </Suspense>
            <Suspense fallback={<div>Loading Department Component...</div>}>
                <DepartmentList />
            </Suspense>

            <div style={{ bottom: "50px", position: "absolute", right: "50px" }}>
                <CustomButton handleClick={clearData} variant="outlined" color="secondary">
                    Clear user
                </CustomButton>
            </div>
        </Container>
    );
};

export default Data;

// pagination
// autoPageSize
// pageSizeOptions={[5, 10, 20]}
