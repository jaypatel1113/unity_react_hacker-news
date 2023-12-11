import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme,ThemeProvider } from "@mui/material";

import App from "./App.tsx";

import "./styles/index.css";

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: "#7e89fd",
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={theme}>
        <Router>
            <App />
        </Router>
    </ThemeProvider>
);
