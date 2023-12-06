interface SubDepartment {
    name: string;
}

export interface Department {
    department: string;
    sub_departments: SubDepartment[];
}
