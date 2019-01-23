const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.listen(3000, function(req, res) {
  console.log("The server has been started in port 3000");
});
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
