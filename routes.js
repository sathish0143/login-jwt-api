const express = require("express");
const routes = express.Router();
const user = require("./user");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://SathishRam2000:DAPgBczXN0z4zENT@sathishr.azcpo.mongodb.net/test";

//!connect mongodb
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

routes.use("/user", user);

//!default err message
routes.get("*", (req, res) => {
  res.status(404);
  res.json({
    gettall: "api/user/all",
    signup: "api/user/signup",
    login: "api/user/login",
  });
});
routes.post("*", (req, res) => {
  res.status(404);
  res.json({
    gettall: "api/user/all",
    signup: "api/user/signup",
    login: "api/user/login",
  });
});

module.exports = routes;
