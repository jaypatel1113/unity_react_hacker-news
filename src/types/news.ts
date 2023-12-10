export type HitsType = {
    author: string,
    created_at: string,
    created_at_i: number,
    title: string,
    updated_at: string,
    url: string,
    _tags: string[],
    objectID: string,
}
export interface NewsType {
    hits: HitsType[];
}


export type CommentsType = {
    id: string,
    author: string;
    created_at: string;
    points: number | null;
    title: string;
    text?: string;
    children?: CommentsType[];
};

export type ErrorType = {
    message: string,
    status: number,
}