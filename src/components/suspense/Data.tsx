import React, { lazy, Suspense } from "react";
import { Container } from "@mui/material";

import Loader from "../loaders/Loader";

const PostList = lazy(() => import("../PostList"));

const Data: React.FC = (): React.ReactNode => {
    return (
        <Container maxWidth="xl">
            <Suspense fallback={<Loader message="Loading component" />}>
                <PostList />
            </Suspense>
        </Container>
    );
};

export default Data;
