/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserTrashesSchema extends Schema {
  up() {
    this.create('trashes', table => {
      table.increments().primary();
      table.string('description');
      table.integer('quantity');
      table
        .integer('userId')
        .references('id')
        .inTable('users');
      table
        .integer('trashCategoryId')
        .references('id')
        .inTable('trashCategories');
      table.timestamps();
    });
  }

  down() {
    this.drop('trashes');
  }
}

module.exports = UserTrashesSchema;
