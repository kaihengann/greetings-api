const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/greetings", (req, res, next) => {
  console.log("Hello!");
  const hello = { greeting: "Hello" };
  res.status(200).json(hello);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
