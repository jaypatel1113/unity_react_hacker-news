import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetch";
import { CommentsType } from "../types";
import { Link } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Comments from "./Comments";


const PostList: React.FC = (): React.ReactNode => {
    const params = useParams<{ id: string }>();
    const { data, loading, error } = useFetchData<CommentsType>(`http://hn.algolia.com/api/v1/items/${params.id}`);

    const [visibleComments, setVisibleComments] = useState(5);

    const loadMoreComments = () => {
        setVisibleComments(visibleComments + 5);
    };

    if(loading) {
        return <>Loading....</>
    }

    
    if (error) {
        return <>Error: {error.message} Status: {error.status}</>;
    }

    return (
        <div className="py-10 font-mono relative">
            <Link to={"/"} className="p-2 md:p-3 rounded-full text-[#b30021] bg-[#ff040437] backdrop-blur-sm fixed top-6 right-4 md:right-6">
                <CloseRoundedIcon />
            </Link>
            <div className="font-bold mb-4 text-4xl font-sans">
                {data?.title}
            </div>

            <div className="mt-2 bg-[#d4faeb] text-[#48d99f] max-w-max px-4 py-1 rounded-full text-base font-semibold">
                Points: {data?.points}
            </div>

            {/* <Typography variant="body1" className="text-gray-800">
                {data?.title}
            </Typography> */}

            <div className="mt-2 bg-[#e5eeff] text-[#3fa0ff] max-w-max px-3 py-1 rounded-full text-sm font-semibold tracking-wide">
                Total Comments: {data ? (data.children ? data.children.length : 0) : 0}
            </div>

            {/* Render comments using the Comment component */}
            {data?.children && (
                <div className="">
                    {data.children
                        .slice(0, visibleComments)
                        .map((comment, index) => (
                            <Comments key={index} comment={comment} />
                        ))}
                </div>
            )}

            {data?.children && visibleComments < data.children.length && (
                <div 
                    className="mt-5 bg-[#f1daf2] text-[#df6cdb] max-w-max px-4 py-1 rounded-full text-base font-semibold cursor-pointer"
                    onClick={loadMoreComments}
                >
                    Load more
                </div>
            )}
        </div>
    )
};

export default PostList;
