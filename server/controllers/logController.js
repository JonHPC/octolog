//server/controllers/logController.js
const { Pool } = require('pg');
const db = require('../models/logModels');

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `logController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occurred logController.${method}. Check server logs for more details.`,
    },
  };
};

const logController = {};

logController.getLogs = (req, res, next) => {
    //this middleware gets and returns all of the logs in the database
    console.log('logController.getLogs');
    next();
}

logController.addLog = (req, res, next) => {
    //this middleware adds a log to the database
    console.log('logController.addLog')
    next();
}

logController.updateLog = (req, res, next) => {
    //this middleware updates a log
    console.log('logController.updateLog');
    next();
}

logController.deleteLog = (req, res, next) => {
    //this middleware deletes a log
}

module.exports = logController;
