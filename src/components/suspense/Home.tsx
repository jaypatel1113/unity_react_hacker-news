import React, { lazy, Suspense } from "react";
import { Container } from "@mui/material";

const HeroSection = lazy(() => import("../Hero"));

const Home: React.FC = (): React.ReactNode => {
    return (
        <Container maxWidth="xl">
            <Suspense fallback={<div>Loading Hero Component...</div>}>
                <HeroSection />
            </Suspense>
        </Container>
    );
};

export default Home;
