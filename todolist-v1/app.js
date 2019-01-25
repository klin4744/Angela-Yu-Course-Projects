const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = ["Do Work"];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
// we needs a views folder to hold ejs files, the engine will look into the views folder by default

app.get("/", function(req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  // The key has to match what value you put in the EJS marker! This render method renders the list.ejs file in our views folder and passes the variable day as kindOfDay to our ejs file
  res.render("list", { listTitle: day, items });
});
app.post("/", function(req, res) {
  console.log(req.body.list);
  let newItem = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(newItem);
    res.redirect("/work");
  } else {
    items.push(newItem);
    res.redirect("/");
  }
});
app.get("/work", function(req, res) {
  res.render("list", { listTitle: "Work List", items: workItems });
});
app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server has been started on port 3000");
});
