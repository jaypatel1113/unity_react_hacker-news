export type CommentsType = {
    id: string,
    author: string;
    created_at: string;
    points: number | null;
    title: string;
    text?: string;
    children?: CommentsType[];
};

