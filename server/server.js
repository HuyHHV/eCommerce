const express = require('express');
const db = require('./config/connection.js');
const routes = require('./routes');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use(cors)
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for running on port ${PORT}!`);
  });
});