import useFetchData from "../hooks/useFetch";

import CustomTypography from "./ui/Typography";

const PostList: React.FC = (): React.ReactNode => {
    // const { data, loading } = useFetchData<NewsType[]>("https://jsonplaceholder.typicode.com/posts");

    return (
        <>
            <CustomTypography>
                Posts list
            </CustomTypography>
            <div style={{ height: 410, width: "100%" }}>
                hi
            </div>
        </>
    );
};

export default PostList;

