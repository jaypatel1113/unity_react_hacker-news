import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import type { CommentsType } from "../types";
import { useFetchData } from "../hooks/useFetch";
import Comments from "./Comments";
import Button from "./ui/Button";
import Label from "./ui/Label";
import Loader from "./loaders/Loader";
import ErrorPage from "./ErrorPage";


const PostList: React.FC = (): React.ReactNode => {
    const params = useParams<{ id: string }>();
    const { data, loading, error } = useFetchData<CommentsType>(`http://hn.algolia.com/api/v1/items/${params.id}`);

    const [visibleComments, setVisibleComments] = useState(5);

    const loadMoreComments = () => {
        setVisibleComments(visibleComments + 5);
    };

    useEffect(() => {
        if(loading) {
            document.title = "Loading...";
        }
        else if (data && data.title) {
            document.title = data.title;
        } else {
            document.title = "Error encountered"
        }
    }, [data, loading]);

    if(loading) {
        return  <Loader message="Fetching API" />
    }

    
    if (error) {
        return <ErrorPage error={error} />;
    }

    return (
        <div className="py-10 font-mono relative">
            <Link to={"/"} className="p-2 md:p-3 rounded-full text-[#b30021] bg-[#ff040437] backdrop-blur-sm fixed top-6 right-4 md:right-6">
                <CloseRoundedIcon />
            </Link>
            <div className="font-bold mb-4 text-4xl font-sans">
                {data?.title}
            </div>

            <Label 
                text={`Points: ${data?.points}`} 
                className="bg-[#d4faeb] text-[#48d99f] px-4 text-base " /
            >

            <Label 
                text={`Total Comments: ${data ? (data.children ? data.children.length : 0) : 0}`} 
                className="bg-[#e5eeff] text-[#3fa0ff] px-3 text-sm " 
            />

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
                <Button 
                    fn={loadMoreComments} 
                    total={data.children.length} 
                    visible={visibleComments} 
                />
            )}
        </div>
    )
};

export default PostList;
