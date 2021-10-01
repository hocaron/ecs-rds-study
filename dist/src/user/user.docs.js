"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDocs = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const createUserDto_1 = require("./dto/createUserDto");
const updateUserDto_1 = require("./dto/updateUserDto");
exports.ApiDocs = {
    createUser(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '새로운 사용자를 생성합니다.',
        }), (0, swagger_1.ApiCreatedResponse)({
            description: '생성된 사용자의 모든 항목을 확인 할 수 있습니다.',
            type: createUserDto_1.CreateUserDto,
        }), (0, swagger_1.ApiResponse)({
            status: 201,
            description: 'The record has been successfully created.',
        }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }));
    },
    getAllUser(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }), (0, swagger_1.ApiOperation)({
            summary,
            description: '모든 사용자 목록을 조회합니다.',
        }));
    },
    getUser(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }), (0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 사용자만 조회합니다.',
        }));
    },
    updateUser(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 사용자의 상세정보를 수정합니다.',
        }), (0, swagger_1.ApiCreatedResponse)({
            description: '생성된 사용자의 모든 항목을 확인 할 수 있습니다.',
            type: updateUserDto_1.UpdateUserDto,
        }), (0, swagger_1.ApiResponse)({
            status: 201,
            description: 'The record has been successfully created.',
        }), (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }));
    },
    deleteUser(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }), (0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 사용자를 삭제합니다.',
        }));
    },
    login(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }), (0, swagger_1.ApiOperation)({
            summary,
            description: '로그인합니다.',
        }));
    },
};
//# sourceMappingURL=user.docs.js.map