const router = require('express').Router();
const userModel = require('../models/userModel.js');

//users path..


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
        res.status(500).json({ message: 'Internal Server Error'})
    })
})

router.put('/:id', (req, res) => {
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

route.delete('/:id', restricted, (req, res) => {
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












// find,
// add,
// update,
// remove