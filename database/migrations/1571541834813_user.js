/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table
        .string('email', 254)
        .notNullable()
        .unique();
      table
        .string('username', 80)
        .notNullable()
        .unique();
      table.string('password', 60).notNullable();
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
