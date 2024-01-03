import mongoose from 'mongoose'
import 'dotenv/config'

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
export default mongoose.connection
