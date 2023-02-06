var fs = require("fs");
const path = require('path');
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});

//mkdir creating
var fs = require("fs");
const path = require('path');
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
});
//rmdir deleting
var fs = require("fs");
const path = require('path');
fs.rmdir("test", () => {
    console.log("Folder Deleted!");

});