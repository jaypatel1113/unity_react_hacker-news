import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Container, Alert } from "@mui/material";

import type { UserDetails } from "../types";

import useAuth from "../hooks/useAuth";
import useFormError from "../hooks/useFormValidate";
import { useNavigate } from "react-router-dom";

const Entry: React.FC = () => {
    const { setAuthenticatedUser, getAuthenticatedUser } = useAuth();
    const navigate = useNavigate();

    const { errors, setErrors, validateForm } = useFormError<UserDetails>();

    const [formData, setFormData] = useState<UserDetails>({
        name: "",
        phoneNumber: "",
        email: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleNext = () => {
        if (validateForm(formData)) {
            setAuthenticatedUser(formData);
            navigate("/data");
        }
    };

    useEffect(() => {
        const data = getAuthenticatedUser();

        if (data) {
            setFormData({ ...data });
        }
    }, []);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                User Details Form
            </Typography>
            {/* {Object.values(errors).some((error) => error !== "") && (
                <Alert severity="error" style={{ marginTop: "16px" }}>
                    Please fill in all the required fields.
                </Alert>
            )} */}
            <TextField
                label="Name"
                name="name"
                type="text"
                fullWidth
                margin="normal"
                value={formData.name}
                onChange={handleInputChange}
                error={Boolean(errors.name)}
                helperText={errors.name}
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                type="number"
                fullWidth
                value={formData.phoneNumber}
                margin="normal"
                onChange={handleInputChange}
                error={Boolean(errors.phoneNumber)}
                helperText={errors.phoneNumber}
            />
            <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                value={formData.email}
                margin="normal"
                onChange={handleInputChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
            />
            <Button variant="contained" color="primary" onClick={handleNext}>
                Next
            </Button>
        </Container>
    );
};

export default Entry;
