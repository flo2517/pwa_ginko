// Loading of the express module
var express = require('express');
var http = require('http');

// Create a service (the app object is just a callback).
var app = express();

console.log(__dirname);

app.use(express.static('.'));  // <-- TODO change to set the app directory 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Create an HTTP service.
http.createServer(app).listen(8080);

console.log("C'est parti. En attente de connexion en HTTP (port 8080)...");