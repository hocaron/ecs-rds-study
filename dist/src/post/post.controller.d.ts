import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    createPost(req: any, body: CreatePostDto): Promise<import("./entities/post.entity").Post>;
    getPost(id: number): Promise<import("./entities/post.entity").Post>;
    updatePost(req: any, id: number, updatePostDto: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    deletePost(req: any, id: number): Promise<void>;
    likePost(req: any, id: number): Promise<import("./entities/post.entity").Post>;
    dislikePost(req: any, id: number): Promise<import("./entities/post.entity").Post>;
}
