import { Connection, Repository } from 'typeorm';
import { UpdatePostDto } from './dto/update-post.dto';
import { Hashtag } from '../hashtag/entities/hashtag.entity';
import { Post } from './entities/post.entity';
import { User } from '../user/entities/user.entity';
export declare class PostService {
    private readonly postRepository;
    private readonly hashtagRepository;
    private readonly userRepository;
    private connection;
    constructor(postRepository: Repository<Post>, hashtagRepository: Repository<Hashtag>, userRepository: Repository<User>, connection: Connection);
    createPost(caption: string, userId: number): Promise<Post>;
    getPost(id: number): Promise<Post>;
    updatePost(id: number, updatePostDto: UpdatePostDto, userId: number): Promise<import("typeorm").UpdateResult>;
    deletePost(id: number, userId: number): Promise<void>;
    likePost(postId: number, userId: number): Promise<Post>;
    dislikePost(postId: number, userId: number): Promise<Post>;
}
