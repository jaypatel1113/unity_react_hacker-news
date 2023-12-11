import { Card, CardContent, Collapse, Typography } from "@mui/material";
import { useState } from "react";
import { CommentsType } from "../types";

const Comments: React.FC<{ comment: CommentsType }> = ({ comment }) => {
    const [showNestedComments, setShowNestedComments] = useState(false);
    const [visibleNestedComments, setVisibleNestedComments] = useState(5);

    const loadMoreNestedComments = () => {
        setVisibleNestedComments(visibleNestedComments + 5);
    };

    return (
        <Card variant="outlined" className="mt-4">
            <CardContent>
                <div className="font-semibold text-xl font-sans tracking-wide mb-2">
                    {comment.author}
                </div>

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
                                    className="text-blue-500 underline cursor-pointer font-mono text-xs font-semibold break-all"
                                    dangerouslySetInnerHTML={{ __html: part }}
                                />
                            );
                        } else {
                            // It's regular text, apply styles
                            return (
                                <p
                                    key={index}
                                    className="text-sm tracking-wider font-sans text-gray-600"
                                    dangerouslySetInnerHTML={{ __html: part }}
                                />
                            );
                        }
                    })}
                </Typography>

                {comment.children && comment.children.length > 0 && (
                    <div
                        className="mt-4 bg-[#fbff041d] text-[#8c9033] max-w-max px-4 py-1 rounded-full text-base font-semibold cursor-pointer flex gap-2 items-center justify-center"
                        onClick={() =>
                            setShowNestedComments(!showNestedComments)
                        }
                    >
                        <div className="w-2 h-2 rounded-full bg-[#8c9033]" />
                        <div className="text-xs truncate">
                            {showNestedComments
                            ? `Hide ${comment.children.length === 1 ? 'Reply' : 'Replies'}`
                            : `View ${comment.children.length} ${comment.children.length === 1 ? 'Reply' : 'Replies'}`}
                        </div>
                    </div>
                )}

                <Collapse in={showNestedComments}>
                    <div className="ml-0">
                        {comment.children &&
                            comment.children
                                .slice(0, visibleNestedComments)
                                .map((nestedComment, index) => (
                                    <Comments
                                        key={index}
                                        comment={nestedComment}
                                    />
                                ))}
                        {comment.children &&
                            visibleNestedComments < comment.children.length && (
                                <div
                                    className="mt-5 bg-[#f1daf2] text-[#df6cdb] max-w-max px-4 py-1 rounded-full text-base font-semibold cursor-pointer"
                                    onClick={loadMoreNestedComments}
                                >
                                    Load more ({comment.children.length - visibleNestedComments} remaining)
                                </div>
                            )}
                    </div>
                </Collapse>
            </CardContent>
        </Card>
    );
};

export default Comments;
