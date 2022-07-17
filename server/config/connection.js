const mongoose = require('mongoose');
const dotenv = require("dotenv");
console.log(process.env.MONGODB_URL)
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/eCommerce',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
