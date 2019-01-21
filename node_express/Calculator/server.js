const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Body parser interacts directly with express
// There are different types of body parsers, json, txt, urlencoded
// Here we use urlencoded because we want to parse data from an HTML form

// extended: true, needs to be declared. This lets us post nested objects. Even though we wont use it in this example, we need to pass it to make bodyParser work.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  // two underscores dirname gives us the directory name, this is better than using a static path because dirname will ALWAYS refer to the current directory regardless of where this file is stored
});
// We can send HTML files by using res.sendFile
// We shouldnt send a relative file path here

// the post method handles post requests
app.post("/", function(req, res) {
  // NOTE body parser will parse these into text
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send(`The result is ${result}`);
  // with body parsr req.body gives us the form data from the request! num1 refers to the name of our input
});
app.get("/bmiCalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmiCalculator", function(req, res) {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);
  res.send(`Your BMI is ${weight / Math.pow(height, 2)}`);
});
app.listen(3000, function() {
  console.log("Server on port 3000 started");
});

// To use passed in data, we need to use the npm package body-parser
// npm i body-parser
