
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('advisorsGroup').del()
    .then(function () {
      // Inserts seed entries
      return knex('advisorsGroup').insert([
        {id: 1, seeker_id: 1, advisor_id: 7 },
        {id: 2, seeker_id: 1, advisor_id: 5 },
        {id: 3, seeker_id: 1, advisor_id: 6 },
        {id: 4, seeker_id: 1, advisor_id: 7 },
        {id: 5,  seeker_id: 1, advisor_id: 7 }
      ]);
    });
};
