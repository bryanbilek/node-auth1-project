const express = require('express');
const Users = require('../helpers/helperModel');
const router = express.Router();

//GET /users
router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get users' });
        });
})

module.exports = router;