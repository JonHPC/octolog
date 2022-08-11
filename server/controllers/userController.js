//server/controllers/userController.js
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

  const userController = {}

  userController.getAllUsers = (req, res, next) => {
    console.log('userController.getAllUsers')
    const queryText = `
    SELECT *
    FROM accounts
    ;`;

    db.query(queryText)
        .then((data) => {
            res.locals.users = data.rows;
            next()
        })
        .catch((err, chars) => {
            res.status(400);
            return next(
              createErr({
                method: 'getAllUsers',
                type: 'querying data',
                err,
              })
            );
          });
  }

  userController.addUser = (req, res, next) => {
    console.log('userController.addUser')
    next()
  }

  userController.verifyUser = (req, res, next) => {
    console.log('userController.verifyUser')
    next()
  }



module.exports = userController;