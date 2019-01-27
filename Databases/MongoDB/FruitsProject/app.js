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
  name: String,
  rating: Number,
  review: String
});
// First input is the collection name, pass in the singular form and mongoose will automatically convert it to its plural version. Here we use Fruit because our collection will be called fruits (plural form and drops capital F, this is done behind the scenes with lodash). This creates a new Fruits collection and every fruit within that colleciton must follow our fruit schema
const Fruit = mongoose.model("Fruit", fruitSchema);
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
const Person = mongoose.model("People", personSchema);
const person = new Person({
  name: "John",
  age: 37
});
person.save();

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
