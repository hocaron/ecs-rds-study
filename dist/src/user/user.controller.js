"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const createUserDto_1 = require("./dto/createUserDto");
const updateUserDto_1 = require("./dto/updateUserDto");
const user_service_1 = require("./user.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../auth/auth.service");
const local_auth_guard_1 = require("../auth/local-auth.guard");
const user_docs_1 = require("./user.docs");
let UserController = class UserController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    createUser(createUserDto) {
        return this.usersService.createUser(createUserDto);
    }
    getAllUser() {
        return this.usersService.getAllUser();
    }
    getUser(id) {
        return this.usersService.getUser(id);
    }
    updateUser(id, updateUserDto) {
        return this.usersService.updateUser(id, updateUserDto);
    }
    deleteUser(id) {
        return this.usersService.deleteUser(id);
    }
    async login(req) {
        return this.authService.login(req.user);
    }
};
__decorate([
    (0, common_1.Post)(),
    user_docs_1.ApiDocs.createUser('사용자 생성 API'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserDto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    user_docs_1.ApiDocs.getAllUser('모든 사용자 조회'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    user_docs_1.ApiDocs.getUser('특정 사용자 조회'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    user_docs_1.ApiDocs.updateUser('사용자 상세정보 수정'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateUserDto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    user_docs_1.ApiDocs.deleteUser('사용자 삭제'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('User'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map