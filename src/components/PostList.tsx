import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import useFetchData from "../hooks/useFetch";
import type { Post } from "../types";

import CustomTypography from "./ui/Typography";

const PostList: React.FC = (): React.ReactNode => {
    const { data, loading } = useFetchData<Post[]>("https://jsonplaceholder.typicode.com/posts");
    
    const columns: GridColDef[] = [
        { field: "id", flex: 1, headerName: "ID" },
        { field: "title", flex: 5, headerName: "Title" },
        { field: "body", flex: 10, headerName: "Body" },
    ];

    // loading while fetching data in middle of table
    const NoRowsOverlay = () => (
        <div style={{ alignItems: "center", display: "flex", height: "100%", justifyContent: "center" }}>
            {loading ? "Loading data..." : "No data"}
        </div>
    );

    return (
        <>
            <CustomTypography>
                Posts list
            </CustomTypography>
            <div style={{ height: 410, width: "100%" }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 5 },
                        },
                    }}
                    slots={{ noRowsOverlay: NoRowsOverlay, toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    checkboxSelection
                />
            </div>
        </>
    );
};

export default PostList;

