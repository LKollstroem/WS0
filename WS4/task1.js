var express = require('express');
var fs = require("fs");
//require library into code
var app = express();
//create route
app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/list', function (req, res){
    res.sendFile(__dirname + "/exampledata.txt");
});
app.get('/details', function (req, res){
    var data = require('./exampledata2.json');
    //pare data to make it look good
    var results = '<table border="1"> ';
    for(var i =0; i<data.length; i++){
        results +=
        '<tr>'+
        '<td>' +data[i].Name+'</td>'+
        '<td>' +data[i].Email+'</td>'+
        '<td>' +data[i].Date+'</td>'+
        '<td>' +data[i].Company+'</td>'+
        '</tr>';
    }
    res.send(results);
});
app.get('/add', function (req, res){
    var data = require('./exampledata2.json');
    data.push({
        "Name": "Mika Stenberg",
        "Email": "mika@laurea.fi",
        "Date": "30/3/2016",
        "Company": "Laurea \r\n"
    });
//convert to string format
    var jsonStr = JSON.stringify(data);
//write data to a file
fs.writeFile('exampledata2.json', jsonStr, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});
    res.send('saved the data to a file, go to /details to see file');
});

//default error page (ALWAYS keep as last route)
app.get('*', function (req, res){
    res.send('Cant find the requested page', 404);
});
//set web server to listen to port
app.listen(8081, function(){
    console.log('Example app listening on port 8081');
});