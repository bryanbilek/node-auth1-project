const express = require('express');
const server = express();
const helmet = require('helmet');
const session = require('express-session');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const restricted = require('./routes/restricted-mw');

const sessionConfig = {
    name: 'bear',
    secret: 'keep it secret',
    cookie: {
        maxAge: 1000 * 60 * 60,//1 hr long
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: true
}

server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));

server.use('/api/users', restricted, usersRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.send('<h2>Web Auth I Module Challenge</h2>');
});

module.exports = server;