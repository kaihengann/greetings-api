const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello!");
  res.status(200).sendFile(__dirname + "/index.html");
});

module.exports = app;
