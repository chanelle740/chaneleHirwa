import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

// entities: ['/src/modules/**/entities/*.entity.ts'],

// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { join } from 'path';

// entities: ['/src/modules/**/entities/*.entity.ts'],
export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'chanelle',
  password: 'chanelle',
  database: 'electricity_token',
  autoLoadEntities: true,
  synchronize: true,
  migrations: ['dist/src/db/migrations.js'],
  cli: { migrationsDir: 'src/db/migrations' },
};