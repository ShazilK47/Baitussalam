const http = require('http');
const { handleRequest } = require('./core/requestHandler');

const PORT = 3000;

const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

server.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
