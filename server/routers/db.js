//server/routers/db.js
const express = require('express');
const logController = require('../controllers/logController');
const router = express.Router();

router.get('/', logController.getLogs, (req, res) => {
    res.status(200).json(res.locals.logs);
});

router.post('/', logController.addLog, (req, res) => {
    res.status(200);
});

router.patch('/', logController.updateLog, (req, res) => {
    res.status(200);
});

router.delete('/', logController.deleteLog, (req, res) => {
    res.status(200);
})

module.exports = router;