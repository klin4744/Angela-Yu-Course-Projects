// const fs = require("fs"); //Gives us access to node's file system module
// // This module allows us to access and manipulate local files
// //copyFileSync allows us to copy a file
// // This line of code will look into the current directory and copy it into file2.txt, since file2.txt does not exist, it will create file2.txt which will have the same text as file1.txt. You must run this in node terminal!
// fs.copyFileSync("file1.txt", "file2.txt");
// // node index.js will run this file

// Using npm modules
// To use a module, require it
const superheroes = require("superheroes");
const supervillians = require("supervillains");
// Now we can use our installed module
let mySuperheroName = superheroes.random();
console.log(mySuperheroName, supervillians.random());
