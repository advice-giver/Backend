const router = require('express').Router();
const messageModel = require('../models/messageModel.js');
const restricted = require('../auth/restricted.js');

//route is /messages

router.post('/', restricted, (req, res) => {
    //need user.id of who is posting and whether message is private, message.
    const user_id = req.body.user_id; //gives the id of the user.  
    if (!req.body.message || !req.body.user_id) {
        return res.status(400).json({ message: 'message is missing private boolean || message || id of poster.'})
    } //boolean may need to be sent from client via a one or zero....
    messageModel
        .add(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal Server Error!'})
        })
})


//edit works..
router.put('/:id', restricted, (req, res) => { 
    const id = req.params.id; //message id.  
  
    messageModel    
        .update(req.body, id)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.status(500).json({ message: 'Internal Server Error!'})
        })
})

    


//delete works..
router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id; //id of message
    messageModel
    .remove(id)
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error.'})
    })
})

router.get('/', restricted,  (req, res) => {
    //check to make sure the user is a advice giver first.....
    //if user is a giver than and has token for restricted middleware
    //then allow access to all messages that aren't private.  
    messageModel
    .findAll()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})


//works
router.get('/:id', restricted, (req, res) => {
    const id = req.params.id;

    messageModel
    .getByUserId(id)
    .then(result => {
        res.json(result)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error'})
    })
})



// need another router that gets the messages that are private from users which have the advisor as an advisor group...


module.exports = router;




// const token = req.headers.authorization;
// requst must be sent with a header authorization token...