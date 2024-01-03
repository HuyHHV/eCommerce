import db from '../config/connection'
import { User, Product } from '../models'
import userSeeds from './userSeeds'
import productSeeds from './productSeeds'
db.once('open', async () => {
  try {
    await User.deleteMany({})
    await User.create(userSeeds)

    await Product.deleteMany({})
    await Product.create(productSeeds)

    console.log('all done!')
    process.exit(0)
  } catch (err) {
    throw err
  }
})
