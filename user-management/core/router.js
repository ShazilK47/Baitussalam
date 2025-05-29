const fs = require('fs');
const path = require('path');
const { sendHtml } = require('./responseSender');
const userRoutes = require('../routes/userRoutes');

function routeRequest(req, res, pathname, query) {
    // ✅ Serve index.html at "/"
    if (pathname === "/" && req.method === "GET") {
        return sendHtml(res, 200, path.join(__dirname, '..', 'pages', 'index.html'));
    }

    const route = userRoutes.find(r => r.method === req.method && r.path === pathname);

    if (route) {
        if (req.method === 'POST' || req.method === 'PUT') {
            let body = '';
            req.on('data', chunk => body += chunk);
            req.on('end', () => {
                const { data, error } = require('./utils').safeJsonParse(body);
                if (error) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ error: 'Invalid JSON' }));
                }
                route.handler(req, res, { query, body: data });
            });
        } else {
            route.handler(req, res, { query });
        }
    } else {
        sendHtml(res, 404, path.join(__dirname, '..', 'pages', '404.html'));
    }
}

module.exports = { routeRequest };
