/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserTrashesSchema extends Schema {
  up() {
    this.create('userTrashes', table => {
      table.string('description');
      table.integer('quantity');
      table.integer('trashId');
      table.integer('userId');
      table.timestamps();
    });
  }

  down() {
    this.drop('userTrashes');
  }
}

module.exports = UserTrashesSchema;
