const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello!");
  res.status(200).send("Hello World! This is new!");
});

module.exports = app;
