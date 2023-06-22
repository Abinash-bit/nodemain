const http = require('http');

http.createServer((req, res) => {
    console.log(req);
});

Server.listen(3000);