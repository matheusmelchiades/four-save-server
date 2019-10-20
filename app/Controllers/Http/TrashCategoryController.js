const model = use('App/Models/TrashCategory');
const Logger = use('Logger');

Logger.level = 'debug';

class TrashCategoryController {
  async show() {
    try {
      const trashCategories = await model.all();

      return trashCategories;
    } catch (err) {
      Logger.debug(err.message);
      return { error: err.details };
    }
  }
}

module.exports = TrashCategoryController;
