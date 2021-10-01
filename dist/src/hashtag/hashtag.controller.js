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
exports.HashtagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const hashtag_docs_1 = require("./hashtag.docs");
const hashtag_service_1 = require("./hashtag.service");
let HashtagController = class HashtagController {
    constructor(hashtagService) {
        this.hashtagService = hashtagService;
    }
    findHashtag(id) {
        return this.hashtagService.findHashtag(id);
    }
    findHashtagByWord(word) {
        return this.hashtagService.findHashtagByWord(word);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    hashtag_docs_1.ApiDocs.findHashtag('해시태그 조회'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HashtagController.prototype, "findHashtag", null);
__decorate([
    (0, common_1.Get)('/search/:word'),
    (0, swagger_1.ApiParam)({
        name: 'word',
        required: true,
        description: '단어',
    }),
    hashtag_docs_1.ApiDocs.findHashtag('단어로 해시태그 조회'),
    __param(0, (0, common_1.Param)('word')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HashtagController.prototype, "findHashtagByWord", null);
HashtagController = __decorate([
    (0, swagger_1.ApiTags)('Hashtag'),
    (0, common_1.Controller)('hashtag'),
    __metadata("design:paramtypes", [hashtag_service_1.HashtagService])
], HashtagController);
exports.HashtagController = HashtagController;
//# sourceMappingURL=hashtag.controller.js.map