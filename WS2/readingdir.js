 //Opettajan koodi:
var fs = require("fs");

fs.readdir(__dirname, (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
            console.log(file);
        })
    }
})
//reads all the files in this directory WS2 
//readingjson.js
//routeswithactions.js
//sampledata.json
//writefile.txt
//WS2.js