import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/controller/user.controller";
import { UserEntity } from "src/entity/user/user.entity";
import { validateEmail } from "src/entity/user/validation/validateEmail.validator";
import { UserService } from "src/service/user.service";


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    controllers: [UserController],
    providers: [UserService, validateEmail],
})
export class UserModule {}
