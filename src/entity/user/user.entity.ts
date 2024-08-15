import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class UserEntity {
    
    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }
 
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({name: 'name', length: 100, nullable: false})
    name: string

    @Column({name: 'email', length: 100, nullable: false})
    email: string

    @Column({name: 'password', length: 100, nullable: false})
    password: string
}