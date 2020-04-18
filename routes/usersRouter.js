const express = require('express');
const router = express.Router();
const Users = require('../helpers/helperModel');
const bcrypt = require('bcryptjs');

//GET for /api/users
router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users' });
        });
});

//POST to /api/register
router.post('/api/register', (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.addUser(user)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users' });
        });
});

//POST to /api/login
router.post('/', (req, res) => {
    Users.findByUser()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users' });
        });
});

module.exports = router;