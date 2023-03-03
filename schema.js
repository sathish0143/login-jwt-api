const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  usenname: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("Userval", userSchema);
