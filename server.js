const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
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
app.use("/", routes);

//!server creation
app.listen(port, () => {
  console.log(`Server Created port: http://localhost:${port}`);
});
