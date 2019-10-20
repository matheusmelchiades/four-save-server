const model = use('App/Models/User');
const Hash = use('Hash');
const Logger = use('Logger');

class SessionController {
  async login({ request }) {
    try {
      const { username, password } = request.post();

      const userDb = await model
        .query()
        .where('username', '=', username)
        .fetch();

      const compare = await Hash.make(password, userDb.password);

      if (!compare) return { error: 'UnAthorizate' };

      return { status: 'loged' };
    } catch (err) {
      Logger.debug(err.details);
      return { error: err.details };
    }
  }
}

module.exports = SessionController;
