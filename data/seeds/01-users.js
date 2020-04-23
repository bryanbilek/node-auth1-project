
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'hello', password: 'goodbye' },
    { username: 'optimus', password: 'prime' },
    { username: 'harry', password: 'potter' }
  ]);
};
