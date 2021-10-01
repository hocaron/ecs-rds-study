"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDocs = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_post_dto_1 = require("./dto/create-post.dto");
exports.ApiDocs = {
    createPost(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '새로운 게시물을 생성합니다.',
        }), (0, swagger_1.ApiCreatedResponse)({
            description: '생성된 게시물의 내용을 확인할 수 있습니다.',
            type: create_post_dto_1.CreatePostDto,
        }), (0, swagger_1.ApiResponse)({
            status: 401,
            description: 'Unauthorized',
        }));
    },
    getPost(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }), (0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 게시물을 조회합니다.',
        }), (0, swagger_1.ApiParam)({
            name: 'id',
            required: true,
            description: '게시물 Id',
        }));
    },
    updatePost(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }), (0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 게시물을 수정합니다.',
        }), (0, swagger_1.ApiParam)({
            name: 'id',
            required: true,
            description: '게시물 Id',
        }));
    },
    deletePost(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 게시물을 삭제합니다.',
        }), (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }), (0, swagger_1.ApiParam)({
            name: 'id',
            required: true,
            description: '게시물 Id',
        }));
    },
    likePost(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 게시물에 좋아요를 생성합니다.',
        }), (0, swagger_1.ApiParam)({
            name: 'id',
            required: true,
            description: '게시물 Id',
        }));
    },
    dislikePost(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 게시물에 좋아요를 삭제합니다.',
        }), (0, swagger_1.ApiParam)({
            name: 'id',
            required: true,
            description: '게시물 Id',
        }));
    },
};
//# sourceMappingURL=post.docs.js.map