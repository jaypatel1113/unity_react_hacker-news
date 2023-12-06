export type UserDetails = {
    name: string;
    phoneNumber: string;
    email: string;
};

export type ToastOptionsType = {
    variant: "success" | "error" | "info" | "warning",
    message: string
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


interface SubDepartment {
    name: string;
}

export interface Department {
    department: string;
    sub_departments: SubDepartment[];
}
