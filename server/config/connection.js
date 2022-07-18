const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/eCommerce',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("DB connection successful!"))
.catch((err) => {
console.log(err);
});;

module.exports = mongoose.connection;
