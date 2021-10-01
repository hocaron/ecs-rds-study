"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDocs = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
exports.ApiDocs = {
    findHashtag(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: '특정 id에 해당하는 해시태그를 조회합니다.',
        }), (0, swagger_1.ApiParam)({
            name: 'id',
            required: true,
            description: '해시태그 Id',
        }));
    },
    findHashtagByWord(summary) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({
            summary,
            description: 'word에 해당하는 해시태그를 조회합니다.',
        }), (0, swagger_1.ApiParam)({
            name: 'word',
            required: true,
            description: '단어',
        }));
    },
};
//# sourceMappingURL=hashtag.docs.js.map