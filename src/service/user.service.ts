import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "src/entity/user/dto/CreateUser.dto";
import { GetUserDTO } from "src/entity/user/dto/GetUser.dto";
import { UserEntity } from "src/entity/user/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRespository: Repository<UserEntity>
    ) {}
    
    async register(userData: CreateUserDTO) {
        const user = await this.userRespository.save(userData);
        return {
            user: new GetUserDTO(user.id, user.name),
            message: "Usuário criado com sucesso!"
        }
    }

    async existsEmail(email: string): Promise<boolean> {
        const emailAlreadyExists: UserEntity[] = await this.userRespository.findBy({ email })
        return !emailAlreadyExists.length
    }
}