import React, { useState } from "react";
import { Collapse, Typography, Button, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetch";
import { CommentsType } from "../types";

const Comment: React.FC<{ comment: CommentsType }> = ({ comment }) => {
    const [showNestedComments, setShowNestedComments] = useState(false);

    return (
        <Card variant="outlined" className="mt-4">
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    className="font-semibold"
                >
                    {comment.author}
                </Typography>

                <Typography
                    variant="body1"
                    component="div"
                    className="text-gray-800"
                >
                    {comment.text?.split(/(<a.*?<\/a>)/).map((part, index) => {
                        if (part.startsWith("<a")) {
                            // It's a link, render it as JSX
                            return (
                                <span
                                    key={index}
                                    className="text-blue-500 underline cursor-pointer"
                                    dangerouslySetInnerHTML={{ __html: part }}
                                />
                            );
                        } else {
                            // It's regular text, apply styles
                            return (
                                <p
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: part }}
                                />
                            );
                        }
                    })}
                </Typography>

                {comment.children && comment.children.length > 0 && (
                    <div className="flex gap-3 items-center justify-between">
                        <Button
                            variant="outlined"
                            className="text-blue-500 underline cursor-pointer mt-2"
                            onClick={() => setShowNestedComments(!showNestedComments)}
                        >
                            {showNestedComments ? "Hide Replies" : "View Replies"}
                        </Button>
                        <div>Total replies: {comment.children.length}</div>
                    </div>
                )}

                <Collapse in={showNestedComments}>
                    <div className="ml-4">
                        {comment.children &&
                            comment.children.map((nestedComment, index) => (
                                <Comment key={index} comment={nestedComment} />
                            ))
                        }
                    </div>
                </Collapse>
            </CardContent>
        </Card>
    );
};

const PostList: React.FC = (): React.ReactNode => {
    const params = useParams<{ id: string }>();
    const { data, loading, error } = useFetchData<CommentsType>(`http://hn.algolia.com/api/v1/items/${params.id}`);

    const [visibleComments, setVisibleComments] = useState(5);

    const loadMoreComments = () => {
        setVisibleComments(visibleComments + 5);
    };

    if(loading) {
        return <>Loaindg....</>
    }

    
    if (error) {
        return <>Error: {error.message} Status: {error.status}</>; // Display error message
    }

    return (
        <div className="py-10">
            <Typography variant="h4" className="font-bold mb-4">
                {data?.author}
            </Typography>

            <Typography variant="body1" className="text-gray-600 mb-2">
                Points: {data?.points}
            </Typography>

            <Typography variant="body1" className="text-gray-800">
                {data?.title}
            </Typography>

            <Typography variant="body2" className="text-gray-600 mt-2">
                Total Comments:{" "}
                {data ? (data.children ? data.children.length : 0) : 0}
            </Typography>

            {/* Render comments using the Comment component */}
            {data?.children && (
                <div className="">
                    {data.children
                        .slice(0, visibleComments)
                        .map((comment, index) => (
                            <Comment key={index} comment={comment} />
                        ))}
                </div>
            )}

            {data?.children && visibleComments < data.children.length && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={loadMoreComments}
                    className="mt-2"
                >
                    Load More
                </Button>
            )}
        </div>
    )
};

export default PostList;
