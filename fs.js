const fs = require('fs');

//.writeFile('NameOfFile', 'Value', callbackFunction)-> asynchronous function

// fs.writeFile('message.txt', 'Hello there Node :)', err => {
//     if(err) throw err;
//     console.log('file has been written');
// });

fs.readFile('./message.txt', 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});
