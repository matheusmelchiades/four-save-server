/*
|--------------------------------------------------------------------------
| ScoreSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const model = use('App/Models/Score');

const scores = [
  {
    price: '5.93',
    score: 8,
  },
  {
    price: '8.89',
    score: 12,
  },
  {
    price: '11.85',
    score: 16,
  },
  {
    price: '14.81',
    score: 20,
  },
  {
    price: '17.78',
    score: 24,
  },
  {
    price: '20.74',
    score: 28,
  },
  {
    price: '23.70',
    score: 32,
  },
  {
    price: '26.67',
    score: 36,
  },
  {
    price: '29.63',
    score: 40,
  },
  {
    price: '32.59',
    score: 44,
  },
  {
    price: '35.56',
    score: 48,
  },
  {
    price: '38.52',
    score: 52,
  },
  {
    price: '41.48',
    score: 56,
  },
  {
    price: '44.44',
    score: 60,
  },
  {
    price: '47.41',
    score: 64,
  },
  {
    price: '50.37',
    score: 68,
  },
  {
    price: '53.33',
    score: 72,
  },
  {
    price: '56.30',
    score: 76,
  },
];

class ScoreSeeder {
  async run() {
    const promises = scores.map(score => model.create(score));

    await Promise.all(promises);
  }
}

module.exports = ScoreSeeder;
