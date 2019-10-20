/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class TrashCategory extends Model {
  static get table() {
    return 'trashCategories';
  }
}

module.exports = TrashCategory;
