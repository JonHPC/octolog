//server/routers/db.js
const { json } = require('express');
const express = require('express');
const logController = require('../controllers/logController');
const router = express.Router();

router.get('/', logController.getLogs, (req, res) => {
    res.status(200).json(res.locals.logs);
});

router.post('/', logController.addLog, (req, res) => {
    res.status(200);
});

router.patch('/:id', logController.updateLog, (req, res) => {
    res.status(200);
});

router.delete('/:id', logController.deleteLog, (req, res) => {
    res.status(200).json(res.locals.logs);
})

module.exports = router;