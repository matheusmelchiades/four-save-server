/*
|--------------------------------------------------------------------------
| PerfiSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const model = use('App/Models/Perfil');

const perfisToLoad = [
  {
    type: 'admin',
    description: 'This perfil is admin',
    administration: true,
  },

  {
    type: 'producer',
    description: 'This perfil is producer',
    administration: false,
  },

  {
    type: 'consumer',
    description: 'This perfil is consumer',
    administration: false,
  },
];

class PerfilSeeder {
  async run() {
    const promises = perfisToLoad.map(perfil => model.create(perfil));

    await Promise.all(promises);
  }
}

module.exports = PerfilSeeder;
