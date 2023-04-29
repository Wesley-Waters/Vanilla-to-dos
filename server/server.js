const path = require('path');
const express = require('express');
const exp = require('constants');

const app = express();

const PORT = 3000;

// handle parsing body request
app.use(express.json());
app.use(express.urlencoded());

// Server html file and css file when page loads
app.use(express.static(path.join(__dirname, '../client')))


// Catch all error handler
app.use((req, res) => {
  res.status(404).send('Page not found');
})

// Express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured'}
  };

  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
})

app.listen(PORT);