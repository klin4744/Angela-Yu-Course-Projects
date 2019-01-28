// Using mongoose, look at the bottom for NodeDB server version of this same project

// 1. Require mongoose
const mongoose = require("mongoose");

// Connect to a url, use the mongoDB server then add a / and the name of the database you want to connect to. Here we use /fruitsDB.
// It'll connect to our mongoDB server and look for our fruitsDB, if it doesn't exist itll create it for us!
mongoose.connect(
  "mongodb://localhost:27017/fruitsDB",
  { useNewUrlParser: true }
);
// Create a schema for every new FRUIT document
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Make sure you enter a name for data entry!"] //second input is message if not true
  },
  rating: {
    // we can insert validation here just like we would using asserts. Data that does not match this validation will be REJECTED!
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});
// First input is the collection name, pass in the singular form and mongoose will automatically convert it to its plural version. Here we use Fruit because our collection will be called fruits (plural form and drops capital F, this is done behind the scenes with lodash). This creates a new Fruits collection and every fruit within that colleciton must follow our fruit schema
const Fruit = mongoose.model("Fruit", fruitSchema);

/////////////////////////
// Adding Information //
///////////////////////
// When we add new fruits, we use our Fruit above
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid"
});
// This save function inserts this new fruit into our collection
// fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "John",
  age: 37
});
person.save();
// Save data in bulk
// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
// const banana = new Fruit({
//   name: "Banana",
//   score: 8,
//   review: "Good stuff"
// });
// Make sure to only call this one time or it will keep adding this information into our database!
// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

//////////////////////////
// Reading Information //
/////////////////////////

// We access our fruit collection easily by:, this find method can take a callback with two inputs, an error and what the find returns. Since we arent querying, we get all of our fruits back.
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }
  // We want to close the connection to the DB on our last action
  mongoose.connection.close();
});
// We get back an array of objects (fruits) that we can easily manipulate

////////////////////////////////
// Update/Delete Information //
///////////////////////////////
Fruit.updateOne(
  { _id: "5c4d4682b88f31ad388a21bd" },
  { name: "Peach" },
  function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully updated the document.");
    }
  }
);

Fruit.deleteOne({ name: "Peach" }, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Deleted!");
  }
});
// Person.deleteMany({ name: "John" }, err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted");
//   }
// });

// const MongoClient = require("mongodb").MongoClient;
// // Assert has to do with testing. It does data validation
// const assert = require("assert");

// // Connection URL - standard port for mongoDB is 27017
// const url = "mongodb://localhost:27017";

// // Database Name
// const dbName = "fruitsDB";

// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   const db = client.db(dbName);
//   findDocuments(db, function() {
//     // When the insertion is finished, we close our db
//     client.close();
//   });
// });

// const insertDocuments = function(db, callback) {
//   //Get the documents collection
//   const collection = db.collection("fruits");
//   // Insert some documents
//   collection.insertMany(
//     [
//       {
//         name: "Apple",
//         score: 8,
//         review: "Great fruit"
//       },
//       {
//         name: "Orange",
//         score: 6,
//         review: "Kinda sour"
//       },
//       {
//         name: "Banana",
//         score: 9,
//         review: "Great stuff!"
//       }
//     ],
//     function(err, result) {
//       // Testing
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     }
//   );
// };
// const findDocuments = function(db, callback) {
//   // Get the documents in the collection
//   const collection = db.collection("fruits");
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
