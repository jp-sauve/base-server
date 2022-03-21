const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  role: {
    type: Number,
    required: true,
    default: 0
  },
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
})

UserSchema.pre("save",
  async function (next) {
    const user = this;
    if (user.password && user.isModified("password")) {
      const salt = await bcrypt.genSalt(12);
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
    }
    next();
  }
);

UserSchema.method("isValidPassword", async function (password) {
  const user = this;
  const isSame = await bcrypt.compare(password, user.password);
  return isSame;
})