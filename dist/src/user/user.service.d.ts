import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { User } from './entities/user.entity';
import { Profile } from '../profile/entities/profile.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly profileRepository;
    constructor(userRepository: Repository<User>, profileRepository: Repository<Profile>);
    findUserByEmail(email: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<{
        password: any;
        email: string;
    } & User>;
    getAllUser(): Promise<User[]>;
    getUser(userId: number): Promise<User>;
    updateUser(userId: number, updateUserDto: any): Promise<void>;
    deleteUser(userId: number): Promise<void>;
}
