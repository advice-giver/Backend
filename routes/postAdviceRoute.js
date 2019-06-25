const router = require('express').Router();
const postAdvice = require('../models/postAdviceModel.js');
const restricted = require('../auth/restricted.js');
const adviceModel = require('../models/postAdviceModel.js');




// router.post('/', (res, req) => {
//     let advice = req.body;
//     //find the user who posted and check id to make sure he can post to the message.
//     if (!req.body.message || !req.body.messageid ||req.body.advicePosterId){
//         res.statusCode(400).json({ message: 'Denied due to lack of message or messageId'})
//     }

//     postAdvice
//         .add(advice)
//         .then(result => {
//             res.statusCode(201).json(result)
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Internal Server Error'})
//         })


// })



module.exports = router;