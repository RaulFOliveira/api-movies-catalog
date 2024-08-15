import { IsEmail, IsNotEmpty, IsString, Min, MinLength, isEmail } from "class-validator"
import { EmailAlreadyExists } from "../validation/validateEmail.validator"

export class CreateUserDTO {
    
    @IsString({ message: 'O nome deve ser um texto' })
    @IsNotEmpty({ message: 'O nome não pode ser vazio' })
    @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres' })
    name: string

    @IsEmail(undefined, { message: "Email inválido" })
    @IsNotEmpty({ message: 'O email não pode ser vazio' })
    @EmailAlreadyExists({ message: 'Email já existe' })
    email: string

    @IsString({ message: 'A senha deve ser um texto' })
    @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
    password: string
}