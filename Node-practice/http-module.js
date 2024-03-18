// http module
// The http module provides a way of working with http. It is a built-in module in Node.js.
// Using the http module, we can create a server, send requests, and handle responses.

// Creating a server
// The http.createServer() method is used to create a server. This method takes in a callback function as an argument. The callback function takes two arguments: request and response.


const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');



// Sending requests
// The http.get() method is used to send a get request. This method takes in the url and a callback function as arguments. The callback function takes in a response object as an argument.


http.get('http://localhost:3000', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.log(err);
});



