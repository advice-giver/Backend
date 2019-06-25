const db = require('../database/dbConfig.js');


module.exports = {
    findAll,
    find,
    add,
    update,
    remove
}
function add(user) {
    return db('users').insert(user);
};

function update(id, changes) {
    return db('users').where({ id }).update(changes);
};

function remove(id) {
    return db('users').where({ id }).del();
};

function find(id) {
    return db('users').where({ id }).first();
};

function findAll() {
    return db('users')
}