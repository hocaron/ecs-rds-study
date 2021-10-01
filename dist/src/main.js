"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("./swagger");
const passport = require("passport");
const common_1 = require("@nestjs/common");
const httpException_filter_1 = require("./httpException.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new httpException_filter_1.HttpExceptionFilter());
    (0, swagger_1.setupSwagger)(app);
    app.use(passport.initialize());
    await app.listen(3000);
    console.log('server listening on 3000');
}
bootstrap();
//# sourceMappingURL=main.js.map