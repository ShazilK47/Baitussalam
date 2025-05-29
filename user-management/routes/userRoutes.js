const { getUsers, createUser, deleteUser } = require('../services/userService');

const routes = [
    {
        path: '/users',
        method: 'GET',
        handler: getUsers
    },
    {
        path: '/users',
        method: 'POST',
        handler: createUser
    },
    {
        path: '/users',
        method: 'DELETE',
        handler: deleteUser
    }
];

module.exports = routes;
