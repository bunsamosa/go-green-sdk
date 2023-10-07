// src/resources/posts/types.ts

export declare type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export declare type NewPost = {
    title: string;
    body: string;
    userId: number;
};
