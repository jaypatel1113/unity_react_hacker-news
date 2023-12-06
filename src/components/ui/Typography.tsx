import { Typography } from "@mui/material";

interface TypographyProps {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode
};

const CustomTypography: React.FC<TypographyProps> = ({ variant="h4", children  }: TypographyProps): React.ReactNode => {
    return (
        <Typography variant={variant} gutterBottom style={{marginTop: "40px"}}>
            {children}
        </Typography>
    );
};

export default CustomTypography;
