const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

Server.listen(3000);