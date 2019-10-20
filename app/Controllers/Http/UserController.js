const model = use('App/Models/User');
const modelPerfil = use('App/Models/Perfil');
const Logger = use('Logger');

Logger.level = 'debug';

class UserController {
  async store({ request }) {
    try {
      const data = request.post();

      const perfilDb = await modelPerfil.find(data.perfilId);

      if (!perfilDb) return { error: 'The perfil not exists!' };

      await model.create(data);

      return { result: 'created with sucess!' };
    } catch (err) {
      Logger.debug(err.details);
      return { error: err.details };
    }
  }
}

module.exports = UserController;
