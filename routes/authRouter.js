const express = require('express');
const router = express.Router();
const Users = require('../helpers/helperModel');
const bcrypt = require('bcryptjs');

//POST to /api/auth/register
router.post('/register', (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);

    user.password = hash;

    Users.add(user)
        .then(users => {
            res.status(200).json({ message: 'Registration successful' });
        })
        .catch(err => {
            res.status(500).json({ message: 'Registraition failed' });
        });
});

//POST to /api/auth/login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                req.session.user = user;
                res.status(200).json({ message: `Welcome ${user.username}!` });
            } else {
                res.status(401).json({ message: 'Invalid username or password' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'You shall not pass!' });
        });
});

//GET to /api/auth/logout
router.get('/api/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.send('error logging out');
            } else {
                res.send(`Til next time, ${user.username}!`);
            }
        });
    }
});

module.exports = router;