import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateMovieDTO } from "src/entity/movie/dto/CreateMovie.dto";
import { UpdateMovieDTO } from "src/entity/movie/dto/UpdateMovie.dto";
import { MovieEntity } from "src/entity/movie/movie.entity";
import { Repository } from "typeorm";

@Injectable()
export class MovieService {
    
    constructor(
        @InjectRepository(MovieEntity)
        private movieRepository: Repository<MovieEntity>
    ){}
    
    async createMovie(movieData: CreateMovieDTO) {
        const newMovie = new MovieEntity(movieData.title, movieData.description, movieData.year, movieData.duration, Number(movieData.rating), movieData.genre, movieData.director);
        await this.movieRepository.save(movieData);
        
        return {
            movie: newMovie,
            message: "Filme criado com sucesso!"
        }
    }
    
    async getAllMovies() {
        const movies = await this.movieRepository.find();
        return movies
    }
    
    async getMovieById(id: string) {
        const movie = await this.movieRepository.findOneBy({ id });
        return movie
    }

    async updateMovie(id: string, updateMovieData: UpdateMovieDTO) {
        await this.movieRepository.update(id, updateMovieData);
        return {
            message: "Filme atualizado com sucesso!"
        }
    }

    async deleteMovie(id: string) {
        await this.movieRepository.delete(id);
        return {
            message: "Filme deletado com sucesso!"
        }
    }
}