import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";

import { DepartmentData } from "../constants";
import type { Department } from "../types";

import CustomTypography from "./ui/Typography";

export default function DepartmentList() {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [expanded, setExpanded] = useState<string[]>([]);

    const handleToggle = (name: string) => {
        const newSelected: string[] = [...selectedItems];

        if (newSelected.includes(name)) {
            // If the sub-department is already selected, deselect it
            const subIndex = newSelected.indexOf(name);
            if (subIndex !== -1) {
                newSelected.splice(subIndex, 1);
            }
        } else {
            // If the sub-department is not selected, select it
            newSelected.push(name);
        }

        setSelectedItems(newSelected);
    };

    const handleExpand = (department: Department) => {
        setExpanded((prevExpanded) => {
            const isExpanded = prevExpanded.includes(department.department);

            if (isExpanded) {
                // If the department is expanded, collapse it
                return prevExpanded.filter((item) => item !== department.department);
            } else {
                // If the department is collapsed, expand it
                return [...prevExpanded, department.department];
            }
        });
    };

    const handleMainCheckboxChange = (department: Department) => {
        const allSubDepartmentNames = department.sub_departments.map((sub) => sub.name);
        const isSelected = selectedItems.includes(department.department);

        // expand on selected main department
        if(!isExpanded(department) && !isSelected) {
            handleExpand(department)
        }

        let newSelected: string[] = [];

        if (isSelected) {
            // Deselect the main department and all sub-departments
            newSelected = selectedItems.filter((item) => item !== department.department && !allSubDepartmentNames.includes(item));
        } else {
            // Select the main department and all sub-departments
            newSelected = [...selectedItems, department.department, ...allSubDepartmentNames];
        }

        setSelectedItems(newSelected);
    };

    const isExpanded = (department: Department) => expanded.includes(department.department);

    const renderDepartment = (department: Department) => (
        <React.Fragment key={department.department}>
            <FormControlLabel
                label={department.department}
                control={
                    <Checkbox
                        checked={department.sub_departments.every((sub) =>
                            selectedItems.includes(sub.name)
                        )}
                        indeterminate={
                            selectedItems.some((sub) =>
                                department.sub_departments.some(
                                    (subDep) => subDep.name === sub
                                )
                            ) &&
                            !department.sub_departments.every((sub) =>
                                selectedItems.includes(sub.name)
                            )
                        }
                        onChange={() => handleMainCheckboxChange(department)}
                    />
                }
            />
            <IconButton
                onClick={() => handleExpand(department)}
                aria-expanded={isExpanded(department)}
                aria-label="show more"
                style={{transform: `rotate(${isExpanded(department) ? 180 : 0}deg)`, transition: "all .1s ease"}}
            >
                <ExpandMoreIcon />
            </IconButton>
            <Collapse in={isExpanded(department)} timeout="auto">
                <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                    {department.sub_departments.map((sub) => (
                        <FormControlLabel
                            key={sub.name}
                            label={sub.name}
                            control={
                                <Checkbox
                                    checked={selectedItems.includes(sub.name)}
                                    onChange={() => handleToggle(sub.name)}
                                />
                            }
                        />
                    ))}
                </Box>
            </Collapse>
        </React.Fragment>
    );

    return (
        <>
            <CustomTypography>
                Department list
            </CustomTypography>

            {DepartmentData.map(renderDepartment)}
        </>
    );
}