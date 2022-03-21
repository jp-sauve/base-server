const dotenv = require("dotenv");
const currentEnv = dotenv.config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const routes = require("./routes");

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  
  console.log("Listening on " + port)
})