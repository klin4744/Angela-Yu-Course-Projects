//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// Create mongo database with the id todolistDB
mongoose.connect(
  "mongodb://localhost:27017/todolistDB",
  { useNewUrlParser: true }
);
// Create itemsSchema and collection
const itemsSchema = new Schema({
  name: String
});
const Item = mongoose.model("Item", itemsSchema);
// Create some items using our schema
const item1 = new Item({
  name: "Workout"
});
const item2 = new Item({
  name: "Buy food"
});
const item3 = new Item({
  name: "Eat food"
});
// Insert our items into our database under the items collection
const defaultItems = [item1, item2, item3];
const listSchema = new Schema({
  name: String,
  items: [itemsSchema]
});
const List = mongoose.model("List", listSchema);
// Read from our database
app.get("/", function(req, res) {
  Item.find({}, function(err, results) {
    if (results.length === 0) {
      // If there are currently no default items in our DB, insert them into our database
      Item.insertMany(defaultItems, function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully inserted");
        }
      });
      // After items are inserted redirect to rerun this get request and get the newly inserted items to render
      res.redirect("/");
    } else {
      // Else just render
      res.render("list", { listTitle: "Today", newListItems: results });
    }
  });
});

app.post("/", function(req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  console.log(listName);
  const itemToInsert = new Item({
    name: itemName
  });
  if (listName === "Today") {
    itemToInsert.save();
    res.redirect("/");
  } else {
    List.findOne({ name: listName }, function(err, foundList) {
      if (err) {
        console.log(err);
      } else {
        foundList.items.push(itemToInsert);
        foundList.save();
        res.redirect("/" + listName);
      }
    });
  }
});

app.post("/delete", function(req, res) {
  const id = req.body.checkbox;
  const title = req.body.listName;
  console.log(title);
  if (title === "Today") {
    Item.deleteOne({ _id: id }, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Deleted!");
      }
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate(
      { name: title },
      {
        $pull: {
          items: { _id: id }
        }
      },
      function(err, results) {
        if (!err) {
          res.redirect("/" + title);
        }
      }
    );
  }
});

app.get("/:name", function(req, res) {
  const customListName = _.capitalize(req.params.name);
  List.findOne({ name: customListName }, function(err, list) {
    if (!err) {
      if (!list) {
        const list = new List({
          name: customListName,
          items: defaultItems
        });
        list.save();
        res.redirect("/" + customListName);
      } else {
        res.render("list", {
          listTitle: customListName,
          newListItems: list.items
        });
      }
    } else {
      console.log(err);
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("The server has started on port 3000");
});
