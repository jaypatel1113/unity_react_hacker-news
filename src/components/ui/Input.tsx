import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { getLabel } from "../../utils";

interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error: string;
};

const Input: React.FC<InputProps> = ({ label, type="text", value, onChange, error }: InputProps): React.ReactNode => {
    return (
        <TextField 
            label={getLabel(label)}
            name={label}
            type={type}
            fullWidth
            margin="normal"
            value={value}
            onChange={onChange}
            error={Boolean(error)}
            helperText={error}
        />
    );
};

export default Input;