const mongoose = require('mongoose');
const Chord = require('./Chord');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  userType: {
    type: String,
    default: "user",
  },
  chords: [{
    type: Schema.Types.ObjectId,
    ref: "Chord"
  }],
});

// TODO fix cascade delete
userSchema.pre('deleteOne', async function (next) {
  // console.log("userSchema.pre('remove'", {
  //   this: this, 
  //   id: this._id, 
  // });
  await Chord.deleteMany({user: this._id})
  next();
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
