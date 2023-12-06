import { toast, ToastOptions } from "react-toastify";

import type { ToastOptionsType } from "../types";

export const showToast = ({message, variant}: ToastOptionsType) => {
    const toastOptions: ToastOptions = {
        autoClose: 3000,
        closeOnClick: true,
        draggable: true,
        hideProgressBar: false,
        pauseOnHover: true,
        position: "bottom-right",
        progress: undefined,
        theme: "colored",
    };

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
