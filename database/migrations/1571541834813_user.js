/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments().primary();
      table.string('firstname').notNullable();
      table.string('lastname').notNullable();
      table
        .string('email', 254)
        .notNullable()
        .unique();
      table
        .string('username', 80)
        .notNullable()
        .unique();
      table.string('password').notNullable();
      table.integer('score').defaultTo(0);
      table.string('address').notNullable();
      table.string('region').notNullable();
      table.string('country').notNullable();
      table.float('latitude').notNullable();
      table.float('longitude').notNullable();
      table
        .integer('perfilId')
        .references('id')
        .inTable('perfis');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
