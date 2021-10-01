import { Post } from '../../post/entities/post.entity';
export declare class User {
    id: number;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    posts: Post[];
    likePosts: Post[];
}
