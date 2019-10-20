const modelTrash = use('App/Models/Trash');
const model = use('App/Models/User');
const Logger = use('Logger');

Logger.level = 'debug';

class DisplacementController {
  async store({ request }) {
    try {
      const data = request.post();

      const userOriginDb = await model.find(data.userOrigin);

      if (!userOriginDb) return { error: 'User origin not exists!' };

      const userDestinyDb = await model.find(data.userDestiny);

      if (!userDestinyDb) return { error: 'User destiny not exists!' };

      const trashDb = await modelTrash.score(data.trashId);

      if (!trashDb) return { error: 'Trash is not exists!' };

      return trashDb;
    } catch (err) {
      console.log(err);
      Logger.debug(err.message);
      return { error: err.details };
    }
  }
}

module.exports = DisplacementController;
