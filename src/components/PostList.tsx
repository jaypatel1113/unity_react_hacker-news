import { Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const PostList: React.FC = (): React.ReactNode => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", flex: 1 },
        { field: "title", headerName: "Title", flex: 5 },
        { field: "body", headerName: "Body", flex: 10 },
    ];
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []); 


    // loading while fetching data in middle of table
    const NoRowsOverlay = () => (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            {loading ? "Loading data..." : "No data"}
        </div>
    );


    return (
        <>
            <Typography variant="h4" style={{margin: "16px 0 26px 0"}}>
                Posts list
            </Typography>
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

