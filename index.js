const express = require('express')
const app = express()
const port = 3000

app.get('/greetings', (req, res, next) => {
  console.log("Hello!");
  res.status(200).json("Hello")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});