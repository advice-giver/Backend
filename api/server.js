const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();


const messageRoute = require('../routes/messageRoute.js');
const authRoute = require('../auth/auth-router.js');
const userRoute = require('../routes/userRouter.js');
const announcementRoute = require('../routes/announcementRoute.js')

server.use(express.json());
server.use(helmet());
server.use(cors());



server.use('/users', userRoute);
server.use('/messages', messageRoute);
server.use('/auth', authRoute);
server.use('/announcements', announcementRoute);




module.exports = server;