const express = require("express");
const { PORT } = require("./config/index");

const app = express();

app.listen(PORT, () => {
  console.log("the port is up and running at" + PORT);
});
