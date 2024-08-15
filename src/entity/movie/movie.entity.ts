import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'movies' })
export class MovieEntity {
    
    constructor(title: string, description: string, year: number, duration: string, rating: number, genre: string, director: string) {
        this.title = title
        this.description = description
        this.year = year
        this.duration = duration
        this.rating = rating
        this.genre = genre
        this.director = director
    }
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'title', length: 100, nullable: false })
    title: string

    @Column({ name: 'description', length: 255, nullable: false })
    description: string

    @Column({ name: 'year', nullable: false })
    year: number

    @Column({ name: 'duration', nullable: false })
    duration: string

    @Column({ name: 'rating', type: 'float', nullable: false, default: 0.0 })
    rating: number

    @Column({ name: 'genre', length: 100, nullable: false })
    genre: string

    @Column({ name: 'director', length: 100, nullable: false })
    director: string
}