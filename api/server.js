const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();


const messageRoute = require('../routes/messageRoute.js');
const postAdvice = require('../routes/postAdviceRoute.js')
const authRoute = require('../auth/auth-router.js')
const userRoute = require('../routes/userRouter.js')

server.use(express.json());
server.use(helmet());
server.use(cors());


server.use('/messages', messageRoute);
server.use('/auth', authRoute);
server.use('/advice', postAdvice);
server.use('/users', userRoute);

module.exports = server;