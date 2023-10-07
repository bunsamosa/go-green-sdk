// src/index.ts

import { Posts } from './resources/posts';

export class Library {
    posts: Posts;

    constructor(config: { apiKey: string; baseUrl?: string }) {
        this.posts = new Posts(config);
    }
}
