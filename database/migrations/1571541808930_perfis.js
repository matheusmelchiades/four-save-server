/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PerfisSchema extends Schema {
  up() {
    this.create('perfis', table => {
      table.increments().primary();
      table.string('type').unique();
      table.string('description');
      table.boolean('administration').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('perfis');
  }
}

module.exports = PerfisSchema;
