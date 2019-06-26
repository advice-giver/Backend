
exports.up = function(knex, Promise) {
    return knex.schema.createTable('announcements', tbl => {
        tbl.increments();
        tbl.string('newAnnouncement').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('announcements');
};
