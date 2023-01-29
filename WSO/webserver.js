var http = require("http");

http.createServer(function (request, response) {
    //Send HTTP header, ,HTTP status 200 = OK
    //Content Type: text/plain
    
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<meta charset=UTF-8><style>table, th {background-color: powderblue; width: 30%; border: 1px solid black;}</style><p>Let's make a table</p><table><thead><tr><th>Name</th><th>Address</th><th>City</th></tr></thead><tbody><tr><th>Matti Meikäläinen</th><th>Timotie 1, as 10</th><th>Tampere</th></tr><tr><th>Maija Virtanen</th><th>Asematie 12</th><th>Kiljava</th></tr></tbody></table>");
    
    //Send response body as Hello World
    response.end("<h1>Hello World again</h1>");
}).listen(8081);
//Console print message on local machine 127.0.0.1. and port?
console.log('Server running at http://127.0.0.1:8081/');

