var fs = require("fs");
fs.open('writefile.txt', 'a', (err, fd) => {
    if (err) throw err;
    //do not know how to add to beginning so add like this: not working
    var data1 = 'I wrote this! ';
    var data2 = fs.readFileSync('writefile.txt');
    const data = new Uint8Array(Buffer.from(data1.toString()+ data2.toString()));
    fs.writeFile(data, 'writefile.txt', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    //appends text to the end
    fs.appendFile(fd, ' I wrote this!', 'utf8', (err) => {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
    console.log('The file has been saved!');
});
