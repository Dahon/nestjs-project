import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUsernameToUsers1638943112926 implements MigrationInterface {
  name = 'addUsernameToUsers1638943112926';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "username" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "username"`);
  }
}
