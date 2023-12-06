export type UserDetails = {
    name: string;
    phoneNumber: string;
    email: string;
};

export type ToastOptionsType = {
    variant: "success" | "error" | "info" | "warning",
    message: string
}
