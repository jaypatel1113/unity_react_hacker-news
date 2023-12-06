import React, { lazy, Suspense } from "react";
import { Container } from "@mui/material";

const PostList = lazy(() => import("./PostList"));
const DepartmentList = lazy(() => import("./DepartmentList"));

const Data: React.FC = (): React.ReactNode => {
    return (
        <Container maxWidth="xl">
            <Suspense fallback={<div>Loading Posts Component...</div>}>
                <PostList />
            </Suspense>
            <Suspense fallback={<div>Loading Department Component...</div>}>
                <DepartmentList />
            </Suspense>
        </Container>
    );
};

export default Data;

// pagination
// autoPageSize
// pageSizeOptions={[5, 10, 20]}
