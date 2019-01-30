const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/wikiDB",
  { useNewUrlParser: true }
);

const articleSchema = mongoose.Schema({
  title: String,
  content: String
});

const Article = mongoose.model("Article", articleSchema);

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/GET", function(req, res) {
  Article.find({}, function(err, response) {
    if (!error) {
      res.send(response);
    }
  });
});

app.listen(3000, function() {
  console.log("The server has started on port 3000");
});
