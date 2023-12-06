import { useState } from "react";

import type { UserType } from "../types";

// chat gpt
type FormErrors<T> = {
    [K in keyof T]?: string;
};

type UseFormValidateResult<T> = {
    errors: FormErrors<T>;
    setErrors: React.Dispatch<React.SetStateAction<FormErrors<T>>>;
    validateForm: (formData: UserType) => boolean;
};

const useFormValidate = <T extends Record<string, unknown>>(): UseFormValidateResult<T> => {
    const [errors, setErrors] = useState<FormErrors<T>>({});

    const validateForm = (formData: UserType): boolean => {
        let isValid = true;
        const newErrors: FormErrors<UserType> = {};

        // Validate name
        if (!formData.name || formData.name.trim() === "") {
            isValid = false;
            newErrors.name = "Please fill in the name.";
        }

        // Validate phoneNumber
        const phoneNumberRegex = /^\d{10}$/; // 10 digits only
        if (!formData.phoneNumber || !phoneNumberRegex.test(formData.phoneNumber)) {
            isValid = false;
            newErrors.phoneNumber =
                "Please enter a valid 10-digit phone number.";
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
        if (!formData.email || !emailRegex.test(formData.email)) {
            isValid = false;
            newErrors.email = "Please enter a valid email address.";
        }

        setErrors(newErrors);
        return isValid;
    };

    return {
        errors,
        setErrors,
        validateForm,
    };
};

export default useFormValidate;
