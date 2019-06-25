const router = require('express').Router();
const userModel = require('../models/userModel.js');
const restricted = require('../auth/restricted.js')
//users path..

//works
router.get('/', restricted, (req, res) => {
    userModel
    .findAll()
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    userModel
    .findById(id)
    .then(reuslt => {
        res.json(result)
    })
    .catch(error => {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error'})
    })
})
//works
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    
    userModel
    .update(id, req.body)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})
//works
router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;


    userModel
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({ message:  'Internal Server Error.'})
    })
})

module.exports = router;









//findById,
// find,
// add,
// update,
// remove