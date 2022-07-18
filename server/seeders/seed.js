const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');
db.once('open', async () => {
  try {
    
    await User.deleteMany({});
    await User.create(userSeeds);
    const count = await User.countDocuments({email:"test1@email.com"})
    console.log(count)
    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
