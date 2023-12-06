import { toast, ToastOptions } from "react-toastify";

export const showToast = (variant: 'success' | 'error' | 'info' | 'warning', message: string) => {
    const toastOptions: ToastOptions = {
        position: "bottom-right", // Specify the position as a predefined type
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        // progress: undefined,
    };

        console.log("here");
        
        switch (variant) {
            case "success":
                toast.success(message, toastOptions);
                break;
            case "error":
                toast.error(message, toastOptions);
                break;
            case "info":
                toast.info(message, toastOptions);
                break;
            case "warning":
                toast.warning(message, toastOptions);
                break;
            default:
                break;
        }
};

