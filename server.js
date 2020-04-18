const express = require('express');
const server = express();
const helmet = require('helmet');
const usersRouter = require('./routes/usersRouter');
const bcrypt = require('bcryptjs');

server.use(express.json());
server.use(helmet());
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
    res.send('<h2>Web Auth I Module Challenge</h2>');
});

module.exports = server;