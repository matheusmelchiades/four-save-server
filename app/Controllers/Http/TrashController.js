const model = use('App/Models/Trash');
const modelUser = use('App/Models/User');
const modelTrashCategory = use('App/Models/TrashCategory');
const Logger = use('Logger');

Logger.level = 'debug';

class TrashController {
  async store({ request }) {
    try {
      const data = request.post();

      const userDb = await modelUser.find(data.userId);

      if (!userDb) return { error: 'User not exists!' };

      const trashCategoryDb = await modelTrashCategory.find(data.trashCategoryId);

      if (!trashCategoryDb) return { error: 'Trash Category not exists!' };

      const newTrash = await model.create(data);

      if (!newTrash) return { error: 'Error on create new trash!' };

      return newTrash;
    } catch (err) {
      Logger.debug(err.details);
      return { error: err.details };
    }
  }
}

module.exports = TrashController;
