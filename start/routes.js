/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return { status: '4SAVE RUNNING' };
});

Route.get('/perfil', 'PerfilController.show');
Route.post('/perfil', 'PerfilController.store');

Route.post('/user', 'UserController.store').validator('UserStore');

Route.post('/trash', 'TrashController.store').validator('TrashStore');

Route.post('/score', 'ScoreController.store').validator('ScoreStore');

Route.post('/displacement', 'DisplacementController.store').validator('DisplacementStore');
