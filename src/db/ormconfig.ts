console.log("Carregando ormconfig")
import 'dotenv/config'

const ormConfig = {
    "type": "postgres",
    "host": `${process.env.DB_HOST}`,
    "port": Number(process.env.DB_PORT),	
    "username": `${process.env.DB_USER}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": `${process.env.DB_NAME}`,
    "entities": ["src/entity/**/*.ts"],
    "migrations": ["src/db/migration/**/*.entity.ts"],
    "cli": {
      "migrationsDir": "src/db/migration"
    }
} 

export default ormConfig