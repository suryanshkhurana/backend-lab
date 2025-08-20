import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("I am Suryansh khurana");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});