function logRequest(req) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
}

function safeJsonParse(str) {
    try {
        return { data: JSON.parse(str), error: null };
    } catch (err) {
        return { data: null, error: err };
    }
}

module.exports = { logRequest, safeJsonParse };
