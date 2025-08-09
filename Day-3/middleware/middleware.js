const express = require("express");
const app = express();
const port = 3000;

const mw1 = (req, res, next) => {
  console.log("this is mw1");
  next();
};

const mw2 = (req, res, next) => {
  console.log("this is mw2");
  next();
};

app.get("/", [mw1, mw2], (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log("server is up and running");
});
