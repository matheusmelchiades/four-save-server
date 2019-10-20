const model = use('App/Models/User');
const Logger = use('Logger');

Logger.level = 'debug';

class DisplacementController {
  async store({ request }) {
    try {
      const data = request.post();

      return data;
    } catch (err) {
      Logger.debug(err.message);
      return { error: err.details };
    }
  }
}

module.exports = DisplacementController;
