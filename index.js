const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Hello!");
  // const hello = { greeting: "Hello" };
  res.status(200).send('Hello World!')
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
