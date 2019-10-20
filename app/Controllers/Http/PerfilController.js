const model = require('../../Models/Perfil');

class PerfilController {
  async show(req, res) {
    const perfis = await model.find({});

    return res.json(perfis);
  }
}

module.exports = PerfilController;
