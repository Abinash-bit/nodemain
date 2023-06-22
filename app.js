const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

servererver.listen(3000);