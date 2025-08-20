import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    fs.readFile('sample.txt', 'utf8', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
