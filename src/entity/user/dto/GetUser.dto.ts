export class GetUserDTO {

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
    
    id: string
    name: string
}