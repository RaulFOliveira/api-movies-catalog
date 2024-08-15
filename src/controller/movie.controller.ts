import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateMovieDTO } from 'src/entity/movie/dto/CreateMovie.dto';
import { UpdateMovieDTO } from 'src/entity/movie/dto/UpdateMovie.dto';
import { MovieService } from 'src/service/movie.service';

@Controller('/movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  async getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Get('/:id')
  async getMovieById(@Param('id') id) {
    return this.movieService.getMovieById(id);
  }

  @Post()
  async createMovie(@Body() movieData: CreateMovieDTO) {
    return this.movieService.createMovie(movieData);
  }

  @Put('/:id')
  async updateMovie(@Param('id') id, @Body() movieData: UpdateMovieDTO) {
    return this.movieService.updateMovie(id, movieData);
  }

  @Delete('/:id')
  async deleteMovie(@Param('id') id) {
    return this.movieService.deleteMovie(id);
  }
}
