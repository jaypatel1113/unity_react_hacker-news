interface SubDepartment {
    name: string;
}

export interface DepartmentType {
    department: string;
    sub_departments: SubDepartment[];
}
