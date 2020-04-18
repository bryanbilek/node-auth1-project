const express = require('express');
const server = express();
const helmet = require('helmet');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const session = require('express-session');

const sessionConfig = {
    name: 'bear',
    secret: 'keep it secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 12,
        secure: false,
        httpOnly: false
    },
    resave: false,
    saveUninitialized: false,
}

server.use(express.json());
server.use(helmet());
server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);
server.use(session(sessionConfig));

server.get('/', (req, res) => {
    res.send('<h2>Web Auth I Module Challenge</h2>');
});

module.exports = server;