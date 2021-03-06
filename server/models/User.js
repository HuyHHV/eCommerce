const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
      email: {
          type: String,
          required: true,
          unique: true,
          match: [/.+@.+\..+/, 'Must match an email address!'],
          },
          
      firstName: {
        type: String,
        required: false,
        // match: [/^[a-zA-Z0-9]+$/, 'username cannot contain special characters'],
        unique:false
        },

      lastName: {
        type: String,
        required: [true, "can't be blank"],
        // match: [/^[a-zA-Z0-9]+$/, 'username cannot contain special characters'],
        unique:false
        },
        
      address : {
          type: String
      },

      cart: {
        type: Schema.Types.ObjectId,
        ref: 'Cart'
      },

      password: {
          type: String,
          required: true,
          minlength: [5,'minimum length is 5'],
          },

      isAdmin: {
        type: Boolean,
        default: false
      }
});

// set up pre-save middleware to create hashed password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Define function isCorrect Password to compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  // console.log(password);
  // console.log(this.password);
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
