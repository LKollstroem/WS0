var http = require("http");
var html = "";

var options = {
  host: "www.omdbapi.com",
  path: "/?s=die+hard&apikey=29c3748"
}; 
var request = http.request(options, function(res) {
  var data = "";
  res.on("data", function(chunk) {
    data += chunk;
  });
  res.on("end", function() {
    console.log(data);

    // Convert the String data to JSON object

    var JSONdata = JSON.parse(data);

    console.log(JSONdata);

    html = "<meta charset=UTF-8><style>table, td {background-color: powderblue; width: 30%; border: 1px solid black;}</style><table>";

    for (var i = 0; i < JSONdata.Search.length; i++) {
      html += "<tr><td>" + JSONdata.Search[i].Title + "</td></tr>";
      html += "<td>" + JSONdata.Search[i].Year + "</td>";
      html += "<td>" + JSONdata.Search[i].Type + "</td>";
      html += "<td><img src='" + JSONdata.Search[i].Poster + "'></td></tr>";

      console.log(JSONdata.Search[i].Title);
      console.log(JSONdata.Search[i].Year);
      console.log(JSONdata.Search[i].Type);
      console.log(JSONdata.Search[i].Poster);
    }
    html += "</table>";
  });
});
request.on("error", function(e) {
  console.log(e.message);
});
request.end();

var http = require("http");

//create a server object:
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<H1> I LOVE BRUCE WILLIS</H1><H2> Yippee-Ki-Yay motherfucker!</H2>");
    response.write(html);
    response.end("This is the end"); //end the response
  })
  .listen(3000); //the server object listens on port 3000