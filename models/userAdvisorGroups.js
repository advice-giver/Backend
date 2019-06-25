const db = require('../database/dbConfig.js');

module.exports = {
    add,
    delete,
    get,
    find

}

function add(users) {
    return db('advisorsGroup').insert(users)
};

async function find(user) {
    let table = await db('advisorGroup')
}

async function delete(user) {
    let table = await db('advisorGroup')
    return db('advisorsGroup').where({ id }).del()
}