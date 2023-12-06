import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

import CustomTypography from "./ui/Typography";
import useFetchData from "../hooks/useFetch";
import type { Post } from "../types";

const PostList: React.FC = (): React.ReactNode => {
    const { data, loading } = useFetchData<Post[]>("https://jsonplaceholder.typicode.com/posts");
    
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "title", headerName: "Title", flex: 5 },
        { field: "body", headerName: "Body", flex: 10 },
    ];

    // loading while fetching data in middle of table
    const NoRowsOverlay = () => (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
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
                    slots={{ toolbar: GridToolbar, noRowsOverlay: NoRowsOverlay }}
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

