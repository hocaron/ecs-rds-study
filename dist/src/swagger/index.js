"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("./constants");
const setupSwagger = (app) => {
    const config = new swagger_1.DocumentBuilder()
        .setTitle(constants_1.SWAGGER_API_TITLE)
        .setDescription(constants_1.SWAGGER_API_DESCRIPTION)
        .setVersion(constants_1.SWAGGER_API_CURRENT_VERSION)
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup(constants_1.SWAGGER_API_ROOT, app, document);
};
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=index.js.map