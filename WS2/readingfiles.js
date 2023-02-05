var fs = require("fs");
console.log("Program started");
var data = fs.readFileSync('example.txt');
console.log(data.toString());
var fs = require("fs");
var data = fs.readFileSync('anothertext.txt');
console.log(data.toString());

console.log("Program Ended");
//non-blocking way of reading