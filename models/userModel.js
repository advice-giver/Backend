const db = require('../database/dbConfig.js');


module.exports = {
    findAll,
    findById,
    add,
    update,
    remove,
    findUser
}

function findUser(username) {
    return db('users').where({ username }).first();
};

function add(user) {
    return db('users').insert(user);
};

async function update(id, changes) {
    await db('users').where({ id }).update(changes);
    return db('users').where({ id }).first();
};

function remove(id) {
    return db('users').where({ id }).del();
};

function findById(id) {
    return db('users').where({ id }).first();
};

function findAll() {
    return db('users')
};