var fs = require("fs");
fs.open('writefile.txt', 'a', (err, fd) => {
    if (err) throw err;
    //appends text to the end
    fs.appendFile(fd, ' I wrote this! ', 'utf8', (err) => {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
    console.log('The file has been saved!');
});
    //trying to add to beginning but not working!!
var fs = require("fs");
var data1 = fs.readFileSync('writefile.txt');
const data = new Uint8Array(Buffer.from("I wrote this! " + data1.toString()));
fs.writeFile('writefile.txt', data, (err) => {
  if (err) throw err;
  console.log('Added to top!');
});
