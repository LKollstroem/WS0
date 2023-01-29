var http = require("http");
var server = http.createServer(function (request,response) {
    http.createServer(function (request, response) {
        if(request.url === "/helloworld"){
            response.writeHead(200,{'Content-Type':'text/plain'})
            response.end('Hello world in HTML');
        }
        else if(request.url === "/index"){
        response.writeHead(200,{'Content-Type':'text/html'})
        response.end("<h1>HOMEPAGE</h1>");
        }
    })
})
var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server is running at http://localhost:%d",port);
//There is something wrong with this code