//server/routers/db.js
const express = require('express');
const logController = require('../controllers/logController');
const router = express.Router();

router.get('/', logController.getLogs, (req, res) => {
    res.status(200);
})

module.exports = router;