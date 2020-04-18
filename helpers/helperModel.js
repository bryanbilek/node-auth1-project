const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    addUser,
    findByUser
}

function getUsers() {
    return db('users')
}

function addUser() {
    return db('users')
        .insert(user);
}

function findByUser(id) {
    return db('users')
        .where('id', id)
        .first();
}