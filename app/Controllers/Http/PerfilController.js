/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const model = use('App/Models/Perfil');
const Logger = use('Logger');

Logger.level = 'debug';

class PerfilController {
  async store({ request }) {
    try {
      const { type, description } = request.only(['type', 'description']);

      if (!type) return { error: "Field 'type' invalid" };
      if (!description) return { error: "Field 'description' invalid" };

      const perfilDb = await model
        .query()
        .where('type', '=', type)
        .fetch();

      if (perfilDb.toJSON().length) return { error: 'perfil already created!' };

      const newPerfil = await model.create({
        type: type.toLowerCase(),
        description,
      });

      return newPerfil;
    } catch (err) {
      Logger.debug(err);
      return { error: err.detail };
    }
  }

  async show() {
    try {
      const perfis = model
        .query()
        .where('administration', false)
        .fetch();

      return perfis;
    } catch (err) {
      Logger.debug(err);
      return { error: err.detail };
    }
  }
}

module.exports = PerfilController;
