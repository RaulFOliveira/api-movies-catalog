import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "src/entity/user/dto/CreateUser.dto";
import { UserService } from "src/service/user.service";

@Controller('/users')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Post('/register')
    async register(@Body() userData: CreateUserDTO) {
        return await this.userService.register(userData);
    }

    
}