import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
    .createTable('departments', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.integer('employee_count').notNullable().defaultTo(0);
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('departments');
}

