const db = require('../database/dbConfig.js');


module.exports = {
    add,
    update,
    remove,
    findAll,
    findByMessageId,
    getByUserId,
}

function add(message) {
    return db('messages').insert(message)
}

function update(changes, id) {
    return db('messages').where({ id }).update(changes);
}
function remove(id) {
    return db('messages').where({ id }).del();
};

// function find() {  I need to find by foreign key of the user who posted.....
//     return db('messages').where({ username }).first();
// };


function findByMessageId(id) {
    return db('messages').where({ id });
}


async function findAll() {
    let messages = await db('messages')
    let notPrivate = await messages.filter(item => {
        return item.private === false;
    })

    return notPrivate; //returns all messages that are not marked as private!!!
}

function getByUserId(user_id) {
    return db('messages').where({ user_id })
}

// async function findPrivateForAdvisors {
   
// }