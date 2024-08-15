import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1715405889052 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "movies" ("id" uuid NOT NUL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, 
            "description" character varying(255) NOT NULL, "year" integer NOT NULL, "duration" character varying(10) NOT NULL, 
            "rating" decimal(3,1) NOT NULL, "genre" character varying(100) NOT NULL, "director" character varying(100) NOT NULL, 
            CONSTRAINT "PK_8f3c2ae3b6b284c554e9b6b12b8" PRIMARY KEY ("id"))
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movies"`)
    }

}
