import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieController } from "src/controller/movie.controller";
import { MovieEntity } from "src/entity/movie/movie.entity";
import { MovieService } from "src/service/movie.service";

@Module({
    imports: [TypeOrmModule.forFeature([MovieEntity])],
    controllers: [MovieController],
    providers: [MovieService],
})
export class MovieModule {}