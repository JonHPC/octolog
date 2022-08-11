//server/server.js
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3000;
const dbRouter = require('./routers/db');

//PARSE BODY ON EVERY REQUEST
app.use(express.json());

console.log('server.js process.env.NODE_ENV: ', process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production'){
    // if NODE_ENV is production, serve the files in /build
    app.use('/build', express.static(path.join(__dirname, '../build')));
}

//ROUTES
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use('/logs', dbRouter);

app.use('/login', dbRouter)
//GLOBAL ERROR HANDLER
// catch-all route handler
app.use((req, res) => res.status(404).send('404: Page not found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listens on port 3000 
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

module.exports = app;

