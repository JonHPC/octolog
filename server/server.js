//server/server.js
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

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

//GLOBAL ERROR HANDLER

//listens on port 3000 
app.listen(3000); 

