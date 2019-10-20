/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Perfil extends Model {
  static get table() {
    return 'perfis';
  }

  static get hidden() {
    return ['administration', 'created_at', 'updated_at'];
  }
}

module.exports = Perfil;
