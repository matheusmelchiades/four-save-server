/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class DisplacementsSchema extends Schema {
  up() {
    this.create('displacements', table => {
      table.increments().primary();
      table
        .integer('userIdOrigin')
        .references('id')
        .inTable('users');
      table
        .integer('userIdDestiny')
        .references('id')
        .inTable('users');
      table
        .integer('trashId')
        .references('id')
        .inTable('trashes');
      table.float('originLatitude');
      table.float('originLongitude');
      table.float('destinyLatitude');
      table.float('destinyLongitude');
      table.boolean('producerValidation').toDefault(false);
      table.boolean('consumerValidation').toDefault(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('displacements');
  }
}

module.exports = DisplacementsSchema;
