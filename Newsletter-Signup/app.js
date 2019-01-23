const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const key = "0469dc1c438a7749a7f4d0a5a47f6e1b-us20";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// For static files (files not from CDNs), Create a folder called public, then use a url relative to the public folder
app.use(express.static("public"));
// Routes
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req, res) {
  let firstName = req.body.first;
  let lastName = req.body.last;
  let email = req.body.email;
  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed"
      }
    ]
  };
  let jsonData = JSON.stringify(data);
  let options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/548b5a6b88",
    method: "POST",
    headers: {
      Authorization: "kevinlin " + key
    },
    body: jsonData
  };
  request(options, function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      console.log(response.statusCode);
    }
  });
});

// Listen
app.listen(3000, function(req, res) {
  console.log("The server has been started in port 3000");
});
