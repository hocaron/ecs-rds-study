"use strict";
const path = require("path");
const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'hell_ta_bus',
    entities: [path.join(__dirname, '**/*.entity{.ts,.js}')],
    migrations: [__dirname + '/src/migrations/*.ts'],
    cli: {
        migrationsDir: __dirname + '/src/migrations',
    },
    autoLoadEntities: true,
    charset: 'utf8mb4',
    synchronize: false,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map