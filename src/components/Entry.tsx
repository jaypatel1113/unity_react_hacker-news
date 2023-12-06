import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

import useAuth from "../hooks/useAuth";
import useFormError from "../hooks/useFormValidate";
import type { UserType } from "../types";

import CustomButton from "./ui/Button";
import CustomInput from "./ui/Input";
import CustomTypography from "./ui/Typography";

const Entry: React.FC = () => {
    const { setAuthenticatedUser, getAuthenticatedUser } = useAuth();
    const navigate = useNavigate();

    const { errors, setErrors, validateForm } = useFormError<UserType>();

    const [formData, setFormData] = useState<UserType>({
        email: "",
        name: "",
        phoneNumber: "",
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
    }, [getAuthenticatedUser]);

    return (
        <Container maxWidth="sm">
            <CustomTypography>
                User Details Form
            </CustomTypography>
            {/* {Object.values(errors).some((error) => error !== "") && (
                <Alert severity="error" style={{ marginTop: "16px" }}>
                    Please fill in all the required fields.
                </Alert>
            )} */}
            <CustomInput
                label="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name ?? ""}
            />
            <CustomInput
                label="phoneNumber"
                type="number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                error={errors.phoneNumber ?? ""}
            />
            <CustomInput
                label="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email ?? ""}
            />
            
            <CustomButton handleClick={handleNext}>
                Next
            </CustomButton>
            
            <div style={{ bottom: "50px", position: "absolute", right: "50px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div>Route 1: &nbsp;/</div>
                    <div>Route 2: &nbsp;/data</div>
                </div>
            </div>
        </Container>
    );
};

export default Entry;
