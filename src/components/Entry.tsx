import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Typography, Container, Alert } from "@mui/material";

import useAuth, { UserDetails } from "../hooks/useAuth";

const Entry: React.FC = () => {
    const { setAuthenticatedUser, getAuthenticatedUser } = useAuth();

    const [formData, setFormData] = useState<UserDetails>({
        name: "",
        phoneNumber: "",
        email: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        phoneNumber: "",
        email: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", phoneNumber: "", email: "" };

        if (!formData.name) {
            isValid = false;
            newErrors.name = "Please fill in your name.";
        }

        if (!formData.phoneNumber) {
            isValid = false;
            newErrors.phoneNumber = "Please fill in your phone number.";
        }

        if (!formData.email) {
            isValid = false;
            newErrors.email = "Please fill in your email.";
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNext = () => {
        // Check if all fields are filled
        if (validateForm()) {
            // Save data to localStorage
            setAuthenticatedUser(formData);
        }
    };
    
    useEffect(() => {
        const data = getAuthenticatedUser();
        console.log(data);
        
        if(data) {
            setFormData({...data});
        }
    }, []);

    return (
        <Container maxWidth="sm">
            <Button>
                <Link to="/data">Navigate to Other Page</Link> 
            </Button>
            <Typography variant="h4" gutterBottom>
                User Details Form
            </Typography>
            {Object.values(errors).some((error) => error !== "") && (
                <Alert severity="error" style={{ marginTop: "16px" }}>
                    Please fill in all the required fields.
                </Alert>
            )}
            <TextField
                label="Name"
                name="name"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleInputChange}
                error={Boolean(errors.name)}
                // helperText={errors.name}
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                fullWidth
                value={formData.phoneNumber}
                margin="normal"
                onChange={handleInputChange}
                error={Boolean(errors.phoneNumber)}
                // helperText={errors.phoneNumber}
            />
            <TextField
                label="Email"
                name="email"
                fullWidth
                value={formData.email}
                margin="normal"
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                // helperText={errors.email}
            />
            <Button variant="contained" color="primary" onClick={handleNext}>
                Next
            </Button>
        </Container>
    );
};

export default Entry;
