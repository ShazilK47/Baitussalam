const { routeRequest } = require('./router');
const { parseQuery } = require('./queryParser');
const { logRequest, safeJsonParse } = require('./utils');

function handleRequest(req, res) {
    logRequest(req);

    const url = new URL(req.url, `http://${req.headers.host}`);
    const query = parseQuery(url.searchParams);

    routeRequest(req, res, url.pathname, query);
}

module.exports = { handleRequest };
