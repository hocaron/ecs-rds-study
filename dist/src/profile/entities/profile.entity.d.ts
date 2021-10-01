import { User } from '../../user/entities/user.entity';
export declare class Profile {
    id: number;
    nickname: string;
    birthday: Date;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
