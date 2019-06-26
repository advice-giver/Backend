const db = require('../database/dbConfig.js');


module.exports = {
    getAnnouncements
}

async function getAnnouncements() {
    let message = await db('announcements');
    return message[0].newAnnouncement;
}