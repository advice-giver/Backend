
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {id: 1, type: 'Finance', title: 'Help with money', message: 'I have question about my finances.  I would like to inquire into whether or not I buy call options or go long the S&P via an index fund.', private: false, user_id: 1},
        {id: 2, type: 'Academics', title: 'Help with career goals.' ,message: 'I am looking to become a software developer and want to know the quickest way to become employed and be competent.', private: false, user_id: 2},
        {id: 3, type: 'Academics', title: 'Which computer?', message: 'What kind of computer do you recommend for someone wanting to become a software developer?', private: false, user_id: 2},
        {id: 4, type: 'Relationship counseling', title: 'Help me with my relationship', message: 'My friend and I are having a hard time with our platonic relationship. I need to know how to handle the situation....', private: true, user_id: 1},
        {id: 5, type: 'Finance', title: 'Money Trouble', message: 'So I have a money problem.  I have to much of it and need to know where to safely keep it stored.  Buy Gold?  Buy Bitcoin?  Buy Tesla?', private: false, user_id: 4},
        {id: 6, type: 'Relationship counseling', title: 'Can you help my relationship??', message: 'This message should display.  I am having a tough time with my girlfriend.  She seems to not be interested in me..  Please help!!', private: false, user_id: 3}
      ]);
    });
};
