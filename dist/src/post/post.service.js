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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const error_1 = require("../error");
const typeorm_2 = require("typeorm");
const hashtag_entity_1 = require("../hashtag/entities/hashtag.entity");
const post_entity_1 = require("./entities/post.entity");
const user_entity_1 = require("../user/entities/user.entity");
let PostService = class PostService {
    constructor(postRepository, hashtagRepository, userRepository, connection) {
        this.postRepository = postRepository;
        this.hashtagRepository = hashtagRepository;
        this.userRepository = userRepository;
        this.connection = connection;
    }
    async createPost(caption, userId) {
        const post = new post_entity_1.Post();
        const user = await this.userRepository.findOne(userId);
        if (!user) {
            throw new common_1.BadRequestException(error_1.Err.NOT_EXISTING_USER);
        }
        const hashtags = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g) || [];
        post.user = user;
        post.caption = caption;
        const hashtagEntityList = await Promise.all(hashtags.map(async (hashtag) => {
            let hashtagEntity = await this.hashtagRepository.findOne({
                where: {
                    tag: hashtag,
                },
            });
            if (!hashtagEntity) {
                const newHashtagEntity = new hashtag_entity_1.Hashtag();
                newHashtagEntity.tag = hashtag;
                hashtagEntity = await this.hashtagRepository.save(newHashtagEntity);
            }
            return hashtagEntity;
        }));
        post.hashtags = hashtagEntityList;
        const createdPost = await this.postRepository.save(post);
        return createdPost;
    }
    async getPost(id) {
        return this.postRepository.findOne({
            where: {
                id,
            },
            relations: ['user'],
        });
    }
    async updatePost(id, updatePostDto, userId) {
        const post = await this.postRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user'],
        });
        if (post.user.id !== userId) {
            throw new common_1.UnauthorizedException();
        }
        return await this.postRepository.update(id, updatePostDto);
    }
    async deletePost(id, userId) {
        const post = await this.postRepository.findOne({
            where: {
                id: id,
            },
            relations: ['user'],
        });
        if (post.user.id !== userId) {
            throw new common_1.UnauthorizedException();
        }
        await this.postRepository.delete(id);
    }
    async likePost(postId, userId) {
        const post = await this.postRepository.findOne({
            where: {
                id: postId,
            },
            relations: ['likeUsers', 'user'],
        });
        if (!post) {
            throw new common_1.BadRequestException(error_1.Err.NOT_EXISTING_POST);
        }
        const user = await this.userRepository.findOne({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new common_1.BadRequestException(error_1.Err.NOT_EXISTING_USER);
        }
        const isAlreadyLiked = !!post.likeUsers.find((user) => {
            return user.id === userId;
        });
        if (isAlreadyLiked) {
            throw new common_1.BadRequestException(error_1.Err.ALREADY_LIKE);
        }
        post.likeUsers.push(user);
        const savedPost = await this.postRepository.save(post);
        return savedPost;
    }
    async dislikePost(postId, userId) {
        const post = await this.postRepository.findOne({
            where: {
                id: postId,
            },
            relations: ['likeUsers'],
        });
        if (!post) {
            throw new common_1.BadRequestException(error_1.Err.NOT_EXISTING_POST);
        }
        const isAlreadyDisliked = !post.likeUsers.find((user) => {
            return user.id === userId;
        });
        if (isAlreadyDisliked) {
            throw new common_1.BadRequestException(error_1.Err.ALREADY_DISLIKE);
        }
        post.likeUsers = post.likeUsers.filter((user) => {
            return user.id !== userId;
        });
        const savedPost = await this.postRepository.save(post);
        return savedPost;
    }
};
PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, typeorm_1.InjectRepository)(hashtag_entity_1.Hashtag)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Connection])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map