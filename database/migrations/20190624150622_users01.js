exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('username').notNullable().unique(); //cant have spaces in the username
      tbl.string('password').notNullable();
      tbl.boolean('adviceGiver').notNullable(); //default to false
      tbl.string('expertise').nullable();
      tbl.integer('yearsOfExperience').nullable();
      tbl.integer('age').nullable();
      tbl.string('email').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  };