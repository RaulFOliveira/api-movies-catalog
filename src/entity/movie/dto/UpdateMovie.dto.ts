import { IsDecimal, IsNotEmpty, IsNumber, IsOptional, IsString, Max, MaxLength, Min } from "class-validator"

export class UpdateMovieDTO {
    @IsString({ message: 'Título deve ser um texto' })
    @IsNotEmpty({ message: 'Título deve ser informado' })
    @IsOptional()
    title: string

    @IsString({ message: 'Descrição deve ser um texto' })
    @IsNotEmpty({ message: 'Descrição deve ser informada' })
    @MaxLength(100, { message: 'Descrição deve ter no maximo 100 caracteres' })
    @IsOptional()
    description: string

    @IsNumber({ allowNaN: false }, { message: 'Ano deve ser um número' })
    @Min(1888, { message: 'Ano deve ser maior ou igual a 1888' })
    @Max(2024, { message: 'Ano deve ser menor ou igual a 2024' })
    @IsNotEmpty({ message: 'Ano deve ser informado' })
    @IsOptional()
    year: number

    @IsString({ message: 'Duração deve ser um texto' })
    @IsNotEmpty({ message: 'Duração deve ser informada' })
    @IsOptional()
    duration: string

    @IsDecimal({ decimal_digits: '1' }, { message: 'Nota deve ser um número' })
    @IsNotEmpty({ message: 'Nota deve ser informada' })
    @IsOptional()
    rating: number

    @IsString({ message: 'Gênero deve ser um texto' })
    @IsNotEmpty({ message: 'Gênero deve ser informado' })
    @IsOptional()
    genre: string

    @IsString({ message: 'Diretor deve ser um texto' })
    @IsNotEmpty({ message: 'Diretor deve ser informado' })
    @IsOptional()
    director: string
}