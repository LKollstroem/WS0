var fs = require("fs");
console.log("Program started");
var data1 = fs.readFileSync('example.txt');
console.log(data1.toString());

var fs = require("fs");
var data2 = fs.readFileSync('anothertext.txt');
console.log(data2.toString());

var fs = require("fs");
//here comes the text you write into the file, can be 'some text' or saved data with tostring()?
const data = new Uint8Array(Buffer.from(data1.toString() + data2.toString()));
fs.writeFile('writefile.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
