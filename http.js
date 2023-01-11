const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req);
    // res.write('Hello there user');
    // res.end(); //always end the response

    if(req.url === '/'){
        res.write('Welcome to the homepage');
        res.end();
    }
    if(req.url === '/user'){
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write('<h1>Welcome user abc</h1>');
        // res.write('<h1>Welcome user xyz</h1>');
        // res.write('<p>Additional content</p>');

        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
        // res.end();
    }
});

//define a port in parameter that you want 
//to listen to, now if go in our browser to 
//our localhost 8080 we'll be making request to this server
server.listen(8080, () => console.log('Server is up and running')); 