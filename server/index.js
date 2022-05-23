const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Logging and parsing
app.use(express.json());

// Router
const router = require('./routes.js');
// Set up our routes
app.use(router);

// Serve the client files
app.use(express.static(path.join(__dirname, '/../client/dist')));

// Set up what we are listening on
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
