import { toast, ToastOptions } from "react-toastify";

import type { ToastOptionsType } from "../types";

export const showToast = ({message, variant}: ToastOptionsType) => {
    const toastOptions: ToastOptions = {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
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
