const router = require('express').Router();
const restricted = require('../auth/restricted.js');
const userAGR = require('../models/userAdvisorGroups.js');


router.post('/', (req, res) => {
    //need req.body to contain the userID of the seeker and the userID of the advice giver..
    if (req.body.adviceGiver !== 0) {
        res.status(400).json({ message: 'You need to be a advice seeker to add advice givers to the group.'})
    }
    if (!req.body.seeker_id || !req.body.advisor_id) {
        res.status(400).json({ message: 'The request needs the seeker id and the advisor id.'})
    }
    userAGR
        .add(req.body)
        .then(result => {
            res.status(201).json(result)
        })
});


router.delete('/:id', (req, res) => {
    const id = req.body.advisor_id;

    if (!req.body.seeker_id || !req.body.advisor_id) {
        res.status(400).json({ message: 'The request needs the seeker id and the advisor id.'})
    
    userAGR
        .remove(id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal Server Error.'})
        })
    }
});

router.get('/:id', (req, res) => {
    const seeker_id = req.params.id;

    userAGR
        .findBySeekerId(seeker_id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            console.error(error)
            res.status(500).json({ message: 'Internal Server Error.'})
        })
})




module.exports = router;