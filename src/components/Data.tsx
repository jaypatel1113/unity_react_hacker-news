import React, { lazy, Suspense, useEffect } from "react";
import { Container } from "@mui/material";

const PostList = lazy(() => import("./PostList"));

const Data: React.FC = (): React.ReactNode => {
    return (
        <Container maxWidth="xl">
            <Suspense fallback={<div>Loading Posts Component...</div>}>
                <PostList />
            </Suspense>
        </Container>
    );
};

export default Data;
