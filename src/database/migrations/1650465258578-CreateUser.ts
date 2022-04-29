import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1650465258578 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'name',
                type: 'varchar',
              },
              {
                name: 'email',
                type: 'varchar',
                length: '60',
                isUnique: true,
              },
              {
                name: 'password',
                type: 'varchar',
              },
              {
                name: 'type',
                type: 'int',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
              ],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
