/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TrashesSchema extends Schema {
  up() {
    this.create('trashes', table => {
      table.increments();
      table.string('name');
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

module.exports = TrashesSchema;
