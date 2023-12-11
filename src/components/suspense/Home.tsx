import React, { lazy, Suspense } from "react";
import { Container } from "@mui/material";

import Loader from "../loaders/Loader";

const HeroSection = lazy(() => import("../Hero"));

const Home: React.FC = (): React.ReactNode => {
    return (
        <Container maxWidth="xl">
            <Suspense fallback={<Loader message="Loading component" />}>
                <HeroSection />
            </Suspense>
        </Container>
    );
};

export default Home;
