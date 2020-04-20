const express = require('express');
const server = express();
const helmet = require('helmet');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const session = require('express-session');
const restricted = require('./routes/restricted-mw');

const sessionConfig = {
    name: 'bear',
    secret: 'keep it secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 12,//12 hrs
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
}

server.use(express.json());
server.use(helmet());
server.use('/api/users', restricted, usersRouter);
server.use('/api/auth', authRouter);
server.use(session(sessionConfig));

server.get('/', (req, res) => {
    res.send('<h2>Web Auth I Module Challenge</h2>');
});

module.exports = server;