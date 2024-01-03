import { Model, Schema, model, Types } from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
  email: string
  firstName: string
  lastName: string
  address: string
  cart: Types.ObjectId
  password: string
  isAdmin: boolean
}

// Put all user instance methods in this interface:
interface IUserMethods {
  isCorrectPassword(password: string): Promise<boolean>
}

// Create a new Model type that knows about IUserMethods...
type UserModel = Model<IUser, {}, IUserMethods>

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  firstName: {
    type: String,
    required: [true, "Can't be blank"],
    // match: [/^[a-zA-Z0-9]+$/, 'username cannot contain special characters'],
    unique: false,
  },

  lastName: {
    type: String,
    required: [true, "Can't be blank"],
    // match: [/^[a-zA-Z0-9]+$/, 'username cannot contain special characters'],
    unique: false,
  },

  address: {
    type: String,
  },

  cart: {
    type: Schema.Types.ObjectId,
    ref: 'Cart',
  },

  password: {
    type: String,
    required: true,
    minlength: [5, 'minimum length is 5'],
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
})

// set up pre-save middleware to create hashed password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10
    this.password = await bcrypt.hash(this.password, saltRounds)
  }

  next()
})

// Define function isCorrect Password to compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password: string) {
  // console.log(password);
  // console.log(this.password);
  return await bcrypt.compare(password, this.password)
}

const User = model<IUser>('User', userSchema)

export default User
