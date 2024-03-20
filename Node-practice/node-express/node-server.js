// basic node server

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        if (req.method === 'GET') {
            res.write('GET request');
        }
        else if (req.method === 'POST') {
            res.write('POST request');
        }
        else if (req.method === 'PUT') {
            res.write('PUT request');
        }
        else if (req.method === 'DELETE') {
            res.write('DELETE request');
        }
        res.end();
    }
    if (req.url === '/write') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
    else if (req.url === '/read') {
        res.write('Hello World read');
        res.end();
    }
    else if (req.url === '/reader') {
        res.statusCode = 301; // Redirect status code
        res.setHeader('Location', 'http://localhost:3000/read'); // Redirects to /read
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');