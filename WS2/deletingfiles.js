var fs = require("fs");
console.log("Program started");

fs.unlink('writefile.txt', (err) => {
    if (err) throw err;
    console.log('writefile.txt was deleted');
  });