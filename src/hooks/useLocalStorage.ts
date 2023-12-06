import { useState } from "react";

import type { UserDetails } from "../types";

// chat gpt
const useLocalStorage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem("userDetails"));

    // Function to set user details in localStorage and update isAuthenticated
    const setAuthenticatedUser = (userDetails: UserDetails) => {
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        setIsAuthenticated(true);
    };

    // Function to clear user details from localStorage and update isAuthenticated
    const clearAuthenticatedUser = () => {
        localStorage.removeItem("userDetails");
        setIsAuthenticated(false);
    };

    // Function to get user details from localStorage
    const getAuthenticatedUser = (): UserDetails | null => {
        const userDetails = localStorage.getItem("userDetails");
        return userDetails ? JSON.parse(userDetails) : null;
    };

    return {
        clearAuthenticatedUser,
        getAuthenticatedUser,
        isAuthenticated,
        setAuthenticatedUser,
    };
};

export default useLocalStorage;
