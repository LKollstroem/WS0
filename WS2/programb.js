var fs = require("fs");
console.log("Program started");
//Name of callback function but not using it yet
fs.readFile('example.txt', results);
for(var i=0; i<15; i++){
    console.log("Node just keeps on going while the file is being read...");
}
//a function to deal with fileRead results
function results(err, data){
    if (err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());
}
//non-blocking way of reading
// use https://nodejs.org/dist/latest-v4.x/docs/api/ as help