/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TrashCategoriesSchema extends Schema {
  up() {
    this.create('trashCategories', table => {
      table.increments().primary();
      table.string('type').unique();
      table.text('description');
      table
        .integer('scoreId')
        .references('id')
        .inTable('scores');
      table.timestamps();
    });
  }

  down() {
    this.drop('trashCategories');
  }
}

module.exports = TrashCategoriesSchema;
