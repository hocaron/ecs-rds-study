import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import * as path from 'path';

const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'helltabus-rds.cgqb4egt4onk.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'root',
  password: 'rootroot',
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

export = config;
