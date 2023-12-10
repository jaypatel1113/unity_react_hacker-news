type Hits = {
    author: string,
    created_at: string,
    created_at_i: number,
    title: string,
    updated_at: string,
    url: string,
    _tags: string[],
}
export interface NewsType {
    hits: Hits[];
}
