import { Button } from "@mui/material";
import { ErrorType } from "../types";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";

type Props = {
    error: ErrorType;
}

const ErrorPage: React.FC<Props> = ({ error }): React.ReactNode => {
    
    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col gap-3 ">
            <div className="text-xl tracking-wide font-sans">
                Error: <span className="text-2xl font-bold ml-3">{error.message ?? "Something went wrong"}</span> 
            </div>
            <div className="text-xl tracking-wide font-sans mb-5">
                Status code: <span className="text-2xl font-bold ml-3">{error.status ?? 404}</span> 
            </div>

            <Button variant="outlined" color="error" startIcon={<KeyboardBackspaceIcon />}>
                <Link to={"/"} className="">
                    Back to Home
                </Link>
            </Button>
        </div>
    );
};

export default ErrorPage;