
exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', tbl => {
        tbl.increments();
        tbl.string('message').notNullable();
        tbl.boolean('private').notNullable();
        tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl.string('type').notNullable();
        tbl.string('title').notNullable();
        tbl.boolean('isAnswered').notNullable();

    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('messages')
};

