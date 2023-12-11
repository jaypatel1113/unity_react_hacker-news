import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.tsx";

import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

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
