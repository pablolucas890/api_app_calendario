import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEvent1650466344313 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'events',
              columns: [{
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'title',
                length: '50',
                type: 'varchar',
              },
              {
                name: "username",
                length: '300',
                type: 'varchar',
              },
              {
                name: 'description',
                length: '300',
                type: 'varchar',
              },
              {
                name: 'link',
                length: '50',
                type: 'varchar',
              },
              {
                name: 'image',
                type: 'int',
              },
              {
                name: 'event_type',
                type: 'int',
              },
              {
                name: 'calendar_type',
                type: 'int',
              },
              {
                name: 'date_start',
                type: 'timestamp',
              },
              {
                name: 'date_end',
                type: 'timestamp',
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
        await queryRunner.dropTable('events');
    }

}
