//server/routers/users.js
const { json } = require('express');
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsers, (req, res) => {
    res.status(200).json(res.locals.users);
});

router.post('/', userController.verifyUser, (req, res) => {
    res.status(200);
});

module.exports = router;