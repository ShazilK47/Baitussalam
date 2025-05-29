const fs = require('fs');

function sendJson(res, status, data) {
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}

function sendHtml(res, status, filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Server Error');
        }
        res.writeHead(status, { 'Content-Type': 'text/html' });
        res.end(data);
    });
}

module.exports = { sendJson, sendHtml };
