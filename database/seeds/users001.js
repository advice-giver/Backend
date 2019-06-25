exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: "Amelia", password: "password", adviceGiver: false, age: 25, email: "amelia@yahoo.com"},
        {id: 2, username: "Norah", password: "password", adviceGiver: false, age: 25, email: "norah@gmail.com"},
        {id: 3, username: "Olive", password: "password", adviceGiver: false, age: 23, email: "olive@hotmail.com" },
        {id: 4, username: "Gwen", password: "password", adviceGiver: false, age: 23, email: "gwenieLOU@aol.com" },
        {id: 5, username: "Buffet", password: "password", adviceGiver: true, expertise: "Finance", yearsofExperience: 10, age: 75, email: "warren@berkshiregmail.com" },
        {id: 6, username: "Freud", password: "password", adviceGiver: true, expertise: "Counseling", yearsofExperience: 10, email: "freudian@yahoo.com"},
        {id: 7, username: "Zuckerberg", password: "password", adviceGiver: true, expertise: "Computers", yearsofExperience: 10, email: "mark@fackbookmail.com"},
      ]);
    });
};
