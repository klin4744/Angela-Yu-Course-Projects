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

// All Articles
app
  .route("/articles")
  .get(function(req, res) {
    Article.find({}, function(err, response) {
      if (!err) {
        res.send(response);
      } else {
        res.send(err);
      }
    });
  })
  .post(function(req, res) {
    if (!req.body.title || !req.body.content) {
      res.send("This is not a valid request");
    } else {
      const newPost = new Article({
        title: req.body.title,
        content: req.body.content
      });
      newPost.save(function(err) {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully Posted!");
        }
      });
    }
  })
  .delete(function(req, res) {
    Article.deleteMany({}, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("All articles have been deleted");
      }
    });
  });

// Specific articles
app
  .route("/articles/:articleID")
  .get(function(req, res) {
    const articleName = req.params.articleID;
    Article.findOne({ title: articleName }, function(err, match) {
      if (!err && match) {
        res.send(match);
      } else {
        res.send(err || "No articles matching the given title found");
      }
    });
  })
  .put(function(req, res) {
    const newArticle = {
      title: req.body.title,
      content: req.body.content
    };
    Article.update(
      { title: req.params.articleID },
      newArticle,
      {
        overwrite: true
      },
      function(err) {
        if (err) {
          res.send(err);
        } else {
          res.send(`The article ${req.params.articleID} has been updated`);
        }
      }
    );
  });

app.listen(3000, function() {
  console.log("The server has started on port 3000");
});
