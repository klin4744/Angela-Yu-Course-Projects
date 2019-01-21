const express = require("express");
// App generally refers to the express module in bigger apps
const app = express();
// the listen method takes a port and will listen for any HTTP requests sent to out server
// A port is like a channel that we're tuning to.
// app.listen(3000); // Here we are listening for requests to port 3000, with this our server is created!

// We can also add a callback function to the listen method to notify us that our server on the specified port is running

// If we actually navigate to port 3000 at this point, we send a get request to our server which currently has nothing and thus will return the error Cannot GET/

// localhost:3000/ <- the / is our root, when we navigate to a website like https://google.com, we are sending a GET request to google's servers which returns the html, css, and js files that allow us to interact with google

// we usually use req for request, and res for response
app.get("/", function(req, res) {
  // the send method sends something back for the specificed get request
  // You can send html in this as well
  res.send("<h1>Hello</h1>");
});
// the get function takes two parameters, the first parameter is the local of the get request; ("/") refers to our root directory (homepage). When that request happens, we can trigger a callback function which takes two parameters: request and response. This callback function runs and does something when someone sends a get request to our home root

// We can create more routes if we want
app.get("/contact", function(req, res) {
  res.send("Contact me at: kevin.lin.2@stonybrook.edu");
});
// If someone tries to go to our contact page, we will respond with this instead
app.get("/about", function(req, res) {
  res.send("My name is Kevin Lin and this is my website");
});

app.get("/hobbies", function(req, res) {
  res.send("nice!");
});
// If you dont want to manually start and stop your server everytime you change something in this file, you can install nodemon which will refresh your server is any code is changed. npm i -g nodemon. Once nodemon is installed with the -g flag it can be used across all projects

// With nodemon installed, start your server with nodemon server.js instead of npm server.js
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
