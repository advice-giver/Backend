
exports.up = function(knex, Promise) {
    return knex.schema.createTable('advisorsGroup', tbl => {
        tbl.increments();
        tbl
        .integer('seeker_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .integer('advisor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('advisorsGroup');
};
