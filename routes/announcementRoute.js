const router = require('express').Router();
const aM = require('../models/announcementModel.js');
const restricted = require('../auth/restricted.js');


router.get('/', restricted, (req, res) => {

    aM.getAnnouncements()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})

module.exports = router;