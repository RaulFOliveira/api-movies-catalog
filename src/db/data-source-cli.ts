import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/**/*.entity.{.ts,.js}'],
  migrations: [__dirname + '/migration/*.{.ts,.js}'],

};

const dataSource = new DataSource(dataSourceOptions)

export default dataSource