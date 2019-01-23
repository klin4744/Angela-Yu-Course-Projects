const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const key;

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
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };
  app.post("/failure", function(req, res) {
    res.redirect("/");
  });
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
    if (error || response.statusCode != 200) {
      console.log(response.statusCode);
      res.sendFile(__dirname + "/failure.html");
    } else {
      res.sendFile(__dirname + "/success.html");
    }
  });
});

// Listen
app.listen(process.env.PORT || 3000, function(req, res) {
  console.log("The server has been started in port 3000");
});
