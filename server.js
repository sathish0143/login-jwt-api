const express = require("express");
const port = process.env.PORT || 8090;
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");
const cors = require("cors");

//!use cocrs
app.use(cors());

//!use body-parser
app.use(bodyParser.json());

//!middleware function
app.use((req, res, next) => {
  console.log("middleware called");
  next();
});

//!router callback function
app.use("/api", routes);

//!server creation
app.listen(port, () => {
  console.log(`Server Created port: http://localhost:${port}`);
});

//!default err message
app.get("*", (req, res) => {
  res.status(404);
  res.json({
    ERROR: "URL NOT FOUND",
    view_Users: {
      path: "api/user/all",
      note: "You need to login first to view content",
    },
    signup: {
      path: "api/user/signup",
      note: `Signup using below format`,
      body: { username: "xxx", password: "xxx", email: "xxx@gmail.com" },
    },
    login: {
      path: "api/user/login",
      note: `Login using below format `,
      body: { username: "xxx", password: "xxx" },
    },
  });
});
app.post("*", (req, res) => {
  res.status(404);
  res.json({
    ERROR: "URL NOT FOUND",
    view_Users: {
      path: "api/user/all",
      note: "You need to login first to view content",
    },
    signup: {
      path: "api/user/signup",
      note: `Signup using below format`,
      body: { username: "xxx", password: "xxx", email: "xxx@gmail.com" },
    },
    login: {
      path: "api/user/login",
      note: `Login using below format `,
      body: { username: "xxx", password: "xxx" },
    },
  });
});
