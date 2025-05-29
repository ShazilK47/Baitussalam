const fs = require('fs');
const path = require('path');
const { sendJson } = require('../core/responseSender');
const filePath = path.join(__dirname, '..', 'data', 'users.json');

function readUsers() {
    if (!fs.existsSync(filePath)) return [];
    const data = fs.readFileSync(filePath, 'utf-8');
    return data ? JSON.parse(data) : [];
}

function writeUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

function getUsers(req, res, { query }) {
    const users = readUsers();
    if (query.id) {
        const user = users.find(u => u.id == query.id);
        return sendJson(res, user ? 200 : 404, user || { error: 'User not found' });
    }
    sendJson(res, 200, users);
}

function createUser(req, res, { body }) {
    const users = readUsers();
    const newUser = {
        id: Date.now(),
        ...body
    };
    users.push(newUser);
    writeUsers(users);
    sendJson(res, 201, newUser);
}

function deleteUser(req, res, { query }) {
    const users = readUsers();
    const updated = users.filter(u => u.id != query.id);
    if (users.length === updated.length) {
        return sendJson(res, 404, { error: 'User not found' });
    }
    writeUsers(updated);
    sendJson(res, 200, { message: 'User deleted' });
}

module.exports = { getUsers, createUser, deleteUser };
