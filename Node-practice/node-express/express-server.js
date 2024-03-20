//Basic Express server
// Express is a web application framework for Node.js. It is used to build web applications and APIs. Express provides a simple and flexible way to create servers and handle requests and responses.


const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('get request')
});

app.post('/', (req, res) => {
    res.send('post request')
});

app.put('/', (req, res) => {
    res.send('put request')
});

app.delete('/', (req, res) => {
    res.send('delete request')
});

app.use((req, res) => {
    res.status(404).send('Not Found');  // 404 status code and Not Found message for all other requests that are not handled by the app.
})


app.listen(3000, () => {
    console.log('Listening on port 3000...')
})

