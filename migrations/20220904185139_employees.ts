import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable('employees', function (table) {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.integer('department_id', 255).notNullable();
            table.date('doj').notNullable();
        })

}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('employees');
}

