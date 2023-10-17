const mongoose = require('mongoose');
require("dotenv").config()

mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://localhost:27017', {
    dbName: 'ecommerce',
    user: 'root',
    pass: 'password',
  })
  .then(() => console.info('DB connection successful!'))
  .catch((err) => {
    console.log(err)
  })

module.exports = mongoose.connection;
