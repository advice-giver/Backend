const router = require('express').Router();
const aM = require('../models/announcementModel.js');
const restricted = require('../auth/restricted.js');


router.get('/', (req, res) => {

    aM.getAnnouncements()
    .then(result => {
        console.log(result)
        res.status(200).json(result)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error'})
    })
})

module.exports = router;