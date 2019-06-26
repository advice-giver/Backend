
exports.up = function(knex, Promise) {
    return knex.schema.createTable('announcments', tbl => {
        tbl.increments();
        tbl.string('newAnnouncement').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('announcments');
};
