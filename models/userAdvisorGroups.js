const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    remove,
    findById,
    findBySeekerId,
    findAllAdvisors

}

async function findAllAdvisors(){
    const table = await db('users');
    const advisors = await table.filter(user => {
        console.log(user)
        return user.adviceGiver === true
    })
    return advisors;
};

function add(users) {
    return db('advisorsGroup').insert(users)
};

async function find(user) {
    let table = await db('advisorsGroup')
};

async function remove(user) {
    let table = await db('advisorsGroup')
    return db('advisorsGroup').where({ advisor_id }).del()
};

function findById(id) {
    return db('users').where({ id }).first();
};

async function findBySeekerId(seeker_id) {

    let users = await db('advisorsGroup').where({ seeker_id })

    let advisorList = [];
    for (let i = 0; i < users.length; i++) {
        let adviceGiver = await findById(users[i].advisor_id);
        advisorList.push(adviceGiver)
    }
       
    
    return advisorList;
    
}


