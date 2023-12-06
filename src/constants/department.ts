import { Department } from "../types";

export const DepartmentData: Department[] = [
    {
        department: "customer_service",
        sub_departments: [
            { name: "support" }, 
            { name: "customer_success" }
        ],
    },
    {
        department: "design",
        sub_departments: [
            { name: "graphic_design" },
            { name: "product_design" },
            { name: "web_design" },
        ],
    },
];