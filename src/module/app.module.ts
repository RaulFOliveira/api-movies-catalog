import { Module } from '@nestjs/common';
import { MovieModule } from './movie.module';
import { DbConfigService } from 'src/config/db.config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    MovieModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
      inject: [DbConfigService],
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 10000
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
