import { Button } from "@mui/material";

interface ButtonProps {
    variant?: "contained" | "outlined" | "text";
    color?: "primary" | "secondary" | "info" | "error" | "warning" | "success";
    handleClick: () => void;
    children: React.ReactNode
};

const CustomButton: React.FC<ButtonProps> = ({ variant="contained", color="primary", handleClick, children }: ButtonProps): React.ReactNode => {
    return (
        <Button variant={variant} color={color} onClick={handleClick}>
            {children}
        </Button>
    );
};

export default CustomButton;