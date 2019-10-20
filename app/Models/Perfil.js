/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Perfil extends Model {
  perfil() {
    return this.find();
  }
}

module.exports = Perfil;
