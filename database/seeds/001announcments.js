
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('announcments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('announcments').insert([
        {id: 1, newAnnouncement: "We are happy to announce Group Help Monday."},
       ]);
    });
};
