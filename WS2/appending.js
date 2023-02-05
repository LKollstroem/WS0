var fs = require("fs");

fs.open('writefile.txt', 'a', (err, fd) => {
    if (err) throw err;
    //trying to add to beginning but not working!!
    var data = fs.readFileSync('writefile.txt');
    var origin = data.toString();
    fs.appendFileSync("writefile.txt", "I wrote this! " + origin, 
    { encoding: "utf8", flag: "w" }
    );
    //appends text to the end
    fs.appendFile(fd, ' I wrote this! ', 'utf8', (err) => {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
    console.log('The file has been saved!');
});
