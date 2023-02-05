var http = require("http");
http.createServer(function (request, response) {
    if(request.url === "/"){
        response.writeHead(200,{'Content-Type':'text/plain'});
        response.end('Nothing here to see');
    }
    else if(request.url === "/frontpage"){
        response.writeHead(200,{'Content-Type':'text/html'});
        var fs = require("fs");
        var data = fs.readFileSync('frontpage.html');
        response.write(data.toString());
        response.end();
    }
    else if(request.url === "/contact"){
        response.writeHead(200,{'Content-Type':'text/html'});
        var fs = require("fs");
        var data = fs.readFileSync('contact.html');
        response.write(data.toString());
        response.end();
    }
    else if(request.url === "/plaintext"){
        response.writeHead(200,{'Content-Type':'text/plain'});
        var fs = require("fs");
        var data = fs.readFileSync('plaintext.txt');
        response.write(data.toString());
        response.end(" The end!");
    }
    else if(request.url === "/json"){
        response.writeHead(200,{'Content-Type':'text/json'});
        var data = require('./sampledata.json');
        //To get everything nicely use the green ones not the defined ones in loop
      // var output = JSON.stringify(data, false, 4);
        for (var i=0; i<data.length; i++){
            console.log(<table border = '1'><tr><td>data[i].name</td><td>data[i].age</td><td>data[i].company</td><td>data[i].address</td></tr></table>);
        //    response.write(<table border = '1'><tr><td>data[i].name</td><td>data[i].age</td><td>data[i].company</td><td>data[i].address</td></tr></table>);
        }
       // response.write(output);
        response.end();
    }
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
//There is something wrong with this code
