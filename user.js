const Userroutes = require("express").Router();
const mongoose = require("mongoose");
const config = require("./config");
const jwt = require("jsonwebtoken");
const { hashGenerate } = require("./hash");
const { validator } = require("./validator");

const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
});

const User = mongoose.model("User", userSchema);

//!get all data from mongo
Userroutes.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//!post data to mongo for signup
Userroutes.post("/signup", async (req, res) => {
  try {
    const { username, email } = req.body;
    const hashPass = await hashGenerate(req.body.password);
    const password = hashPass;
    console.log(password);
    const users = new User({ username, password, email });
    users.save();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Error creating user");
  }
});

//!login to data
Userroutes.post("/login", async (req, res) => {
  const existUser = await User.findOne({ username: req.body.username });
  console.log(existUser.password, req.body.password);
  if (!existUser) {
    res.send("User not found");
  } else {
    const password = req.body.password;
    const checkUser = await validator(password, existUser.password);
    if (!checkUser) {
      res.send("please enter corrrect password");
    } else {
      const token = jwt.sign({ id: existUser._id }, config.secret, {
        expiresIn: "1h",
      });
      res.status(200).send({ auth: true, token: token });
    }
  }
});

//!logout user
Userroutes.get("/logout", function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = Userroutes;
