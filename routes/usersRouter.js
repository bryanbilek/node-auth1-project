const express = require('express');
const router = express.Router();
const Users = require('../helpers/helperModel');
const restrict = require('./authRouter');

//GET for /api/users
router.get('/', restrict, (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users' });
        });
});

module.exports = router;