import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
export declare class UserController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UserService, authService: AuthService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    getAllUser(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    deleteUser(id: number): Promise<void>;
    login(req: any): Promise<{
        accessToken: string;
    }>;
}
