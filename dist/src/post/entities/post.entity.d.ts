import { User } from '../../user/entities/user.entity';
import { Hashtag } from '../../hashtag/entities/hashtag.entity';
export declare class Post {
    id: number;
    caption: string;
    updatedAt: Date;
    deletedAt: Date | null;
    user: User;
    hashtags: Hashtag[];
    likeUsers: User[];
    likeCnt: number;
}
