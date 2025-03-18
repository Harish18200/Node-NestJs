import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1742270719183 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        if (!(await queryRunner.hasTable('product'))) {
            await queryRunner.createTable(
              new Table({
                name: 'product',
                columns: [
                  { name: 'id', type: 'serial', isPrimary: true },
                  { name: 'name', type: 'varchar' },
                  { name: 'price', type: 'varchar' },
                ],
              }),
            );
          }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product');
    }

}
