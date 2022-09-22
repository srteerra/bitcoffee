/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require("dotenv").config();
var history = require("connect-history-api-fallback");

// express
const express = require("express");
const path = require("path");

// INITIALIZING
const app = express();

app.use(history());
app.set("port", process.env.PORT || 8080);

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// RUN SERVER
app.listen(app.get("port"), () => {
  console.log("SERVER ON PORT: ", app.get("port"));
});
