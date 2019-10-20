/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ScoresSchema extends Schema {
  up() {
    this.create('scores', table => {
      table.increments();
      table.integer('score');
      table.float('price');
      table.timestamps();
    });
  }

  down() {
    this.drop('scores');
  }
}

module.exports = ScoresSchema;
