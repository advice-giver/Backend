
exports.up = function(knex, Promise) {
  return knex.schema.createTable('advice', tbl => {
      tbl.increments();
      tbl.string('adviceMessage').notNullable();
      tbl
      .integer('message_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('messages')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
      tbl
      .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  }
};

exports.down = function(knex, Promise) {
  
};
