const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

// app.get('*.js', (req, res, next) => {
//   req.url += '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

// Logging and parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Router
const router = require('./routes.js');


// Set up our routes
app.use(router);

app.get('*.js', (req, res, next) => {
  if (req.header('Accept-Encoding').includes('br')) {
    req.url += '.br';
    console.log(req.header('Accept-Encoding'));
    res.set('Content-Encoding', 'br');
    res.set('Content-Type', 'application/javascript; charset=UTF-8');
  }
  next();
});

// Serve the client files
app.use(express.static(path.join(__dirname, '/../client/dist')));

// Set up what we are listening on
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
