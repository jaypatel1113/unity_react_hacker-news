import { useState } from "react";

import type { UserDetails } from "../types";

// chat gpt
type FormErrors<T> = {
    [K in keyof T]?: string;
};

type UseFormErrorResult<T> = {
    errors: FormErrors<T>;
    setErrors: React.Dispatch<React.SetStateAction<FormErrors<T>>>;
    validateForm: (formData: UserDetails) => boolean;
};

const useFormError = <T extends Record<string, unknown>>(): UseFormErrorResult<T> => {
    const [errors, setErrors] = useState<FormErrors<T>>({});

    const validateForm = (formData: UserDetails): boolean => {
        let isValid = true;
        const newErrors: FormErrors<T> = {};
        
        Object.entries(formData).forEach(([key, value]) => {
            
            if (value === undefined || value === null || value === "") {
                isValid = false;
                newErrors[key as keyof T] = `Please fill in ${key}.`;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    return {
        errors,
        setErrors,
        validateForm,
    };
};

export default useFormError;
