var data = require('./sampledata.json');
console.log("Original data");
console.log( data);

data.push({
    "name": "John Doe",
    "age": "52",
    "company": "Laurea",
    "address": "Ratatie 22"
});
console.log("Added data");
console.log( data);

var fs = require("fs");
//here comes the text you write into the file?
const data1 = JSON.stringify(data, false, 4);
fs.writeFile('dataset.json', data1, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
//Here comes adding to the browser:
var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200,{'Content-Type':'text/json'});
    var data = require('./dataset.json');
    var output = JSON.stringify(data, false, 4);
    response.write(output);
    response.end();
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

        







//for deleting
//delete data[1];
//console.log("Deleted data");
//console.log( data);

