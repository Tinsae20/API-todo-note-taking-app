"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.getUserByID = getUserByID;
exports.createUser = createUser;
function getUsers(req, res) {
    res.send([]);
}
function getUserByID(req, res) {
    res.send({});
}
function createUser(req, res) {
    res.status(201).send({
        id: "1",
        username: "tinsu",
        emial: "tinsu@gm.co",
        password: "1234"
    });
}
