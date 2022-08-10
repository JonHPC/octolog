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
  //const queryText = `SELECT * FROM logs ORDER BY log_id DESC;`;
  const queryText = `
  SELECT logs.*, acc.username AS "created_by"
  FROM logs
  LEFT JOIN accounts acc 
  ON acc.user_id = logs.user_id
  ORDER BY logs.log_id DESC
  ;`;
  db.query(queryText)
    .then((data) => {
      //console.log('getLogs data: ', data.rows);
      res.locals.logs = data.rows;
      next();
    })
    .catch((err, chars) => {
      res.status(400);
      return next(
        createErr({
          method: 'getLogs',
          type: 'querying data',
          err,
        })
      );
    });
};

logController.addLog = (req, res, next) => {
  //this middleware adds a log to the database
  console.log('logController.addLog req.body: ', req.body);
  const {
    log,
    title,
    createdOn,
    createdBy,
    diveSite,
    maxDepth,
    avgDepth,
    timeIn,
    timeOut,
    temperature,
    tankStart,
    tankEnd,
    buddies,
    diveComments,
  } = req.body;

  const values = [
    parseInt(log),
    title,
    createdOn,
    createdBy,
    diveSite,
    parseFloat(maxDepth),
    parseFloat(avgDepth),
    timeIn,
    timeOut,
    parseFloat(temperature),
    parseFloat(tankStart),
    parseFloat(tankEnd),
    buddies,
    diveComments,
  ];

  console.log('logController.addLog values: ', values);

  const queryText = `
  INSERT INTO logs (
    log_id,
    user_id,
    title,
    created_on,
    dive_site,
    max_depth,
    avg_depth,
    time_in,
    time_out,
    temperature,
    tank_start,
    tank_end,
    buddies,
    dive_comments
   )
   
   VALUES (
     $1,
     $4,
     $2,
     $3,
     $5,
     $6,
     $7,
     $8,
     $9,
     $10,
     $11,
     $12,
     $13,
     $14
   )
  ;`;

  db.query(queryText, values)
    .then((data) => {
      //console.log('addLog data: ', data);
      next();
    })
    .catch((err, chars) => {
      res.status(400);
      return next(
        createErr({
          method: 'addLog',
          type: 'adding data',
          err,
        })
      );
    });
};

logController.updateLog = (req, res, next) => {
  //this middleware updates a log
  console.log('logController.updateLog');
  next();
};

logController.deleteLog = (req, res, next) => {
  //this middleware deletes a log
  console.log('logController.deleteLog req.params.id: ', req.params.id);
  const id = req.params.id;
  const values = [id];
  const queryText = `
  DELETE FROM logs
  WHERE log_id = $1
  RETURNING *
  ;`;
  db.query(queryText, values)
    .then((data) => {
      next();
    })
    .catch((err, chars) => {
      res.status(400);
      return next(
        createErr({
          method: 'deleteLog',
          type: 'deleting data',
          err,
        })
      );
    });
};

module.exports = logController;
