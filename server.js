'use strict';

const express = require('express');
const moment = require('moment');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world -> ' + moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);