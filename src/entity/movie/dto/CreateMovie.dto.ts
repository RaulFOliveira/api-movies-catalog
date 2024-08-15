import { IsDecimal, IsNotEmpty, IsNumber, IsString, Max, MaxLength, Min, isNotEmpty } from "class-validator"

export class CreateMovieDTO {

    @IsString({ message: 'Título deve ser um texto' })
    @IsNotEmpty({ message: 'Título deve ser informado' })
    title: string

    @IsString({ message: 'Descrição deve ser um texto' })
    @IsNotEmpty({ message: 'Descrição deve ser informada' })
    @MaxLength(100, { message: 'Descrição deve ter no maximo 100 caracteres' })
    description: string

    @IsNumber({ allowNaN: false }, { message: 'Ano deve ser um número' })
    @Min(1888, { message: 'Ano deve ser maior ou igual a 1888' })
    @Max(2024, { message: 'Ano deve ser menor ou igual a 2024' })
    @IsNotEmpty({ message: 'Ano deve ser informado' })
    year: number

    @IsString({ message: 'Duração deve ser um texto' })
    @IsNotEmpty({ message: 'Duração deve ser informada' })
    duration: string
    
    @IsNumber(undefined, { message: 'Nota deve ser um número' })
    @IsNotEmpty({ message: 'Nota deve ser informada' })
    rating: number

    @IsString({ message: 'Gênero deve ser um texto' })
    @IsNotEmpty({ message: 'Gênero deve ser informado' })
    genre: string

    @IsString({ message: 'Diretor deve ser um texto' })
    @IsNotEmpty({ message: 'Diretor deve ser informado' })
    director: string
}