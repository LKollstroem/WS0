var express = require('express');
var fs = require("fs");
//require library into code
var app = express();
//require form data module
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));
//serve the form to the user
app.get('/adduserform', function (req, res){
    res.sendFile(__dirname + '/public/adduserform.html');
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
app.post('/adduserform', function (req, res){
    var data = require('./exampledata2.json');
    data.push({
        "Name": req.body.name,
        "Email": req.body.email,
        "Company": req.body.company,
        "Date": new Date()
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

app.listen(8081, function(){
    console.log('Example app listening on port 8081');
});