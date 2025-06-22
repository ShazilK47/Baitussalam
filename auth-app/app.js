const http = require('http');
const { randomUUID } = require('crypto');

const PORT = 3000;

const SESSION_LIFETIME_MS = 60 * 1000; // 1 minute for demo expiry

// In-memory session store (for demo only)
const sessionStore = {};

const USERS = {
  alice: { password: 'password123', name: 'Alice Wonderland' },
};

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach(cookie => {
    let [name, ...rest] = cookie.split('=');
    name = name?.trim();
    if (!name) return;
    const value = rest.join('=').trim();
    if (!value) return;
    list[name] = decodeURIComponent(value);
  });
  return list;
}

function setCookie(res, name, value, options = {}) {
  let cookie = `${name}=${encodeURIComponent(value)}`;
  if (options.httpOnly) cookie += '; HttpOnly';
  if (options.path) cookie += `; Path=${options.path}`;
  if (options.maxAge !== undefined) cookie += `; Max-Age=${options.maxAge}`;
  res.setHeader('Set-Cookie', cookie);
}

function sendResponse(res, statusCode, body, headers = {}) {
  res.writeHead(statusCode, { 'Content-Type': 'text/html', ...headers });
  res.end(body);
}

function isSessionExpired(session) {
  return (Date.now() - session.createdAt) > SESSION_LIFETIME_MS;
}

const server = http.createServer((req, res) => {
  console.log(`\n--- Incoming Request: ${req.method} ${req.url} ---`);

  const cookies = parseCookies(req.headers.cookie);
  console.log('Parsed Cookies:', cookies);

  const sessionId = cookies.sessionId;
  let session = sessionId ? sessionStore[sessionId] : null;

  if (sessionId) {
    console.log(`Session ID from cookie: ${sessionId}`);

    if (!session) {
      console.log('Session ID found but no session data (maybe expired or invalid)');
    } else if (isSessionExpired(session)) {
      console.log('Session expired! Deleting session:', sessionId);
      delete sessionStore[sessionId];
      session = null;
      // Clear cookie by setting maxAge=0
      setCookie(res, 'sessionId', '', { httpOnly: true, path: '/', maxAge: 0 });
    } else {
      console.log('Session data found:', session);
    }
  } else {
    console.log('No session ID found in cookies');
  }

  // Helper to show current session info on pages
  function sessionInfoHtml() {
    if (session) {
      return `
      <p><strong>Session ID:</strong> ${sessionId}</p>
      <p><strong>Session created at:</strong> ${new Date(session.createdAt).toLocaleTimeString()}</p>
      <p><strong>Session expires in:</strong> ${Math.round((SESSION_LIFETIME_MS - (Date.now() - session.createdAt))/1000)} seconds</p>
      `;
    }
    return `<p>No active session</p>`;
  }

  if (req.url === '/' && req.method === 'GET') {
    if (session && session.username) {
      sendResponse(res, 200, `
        <h1>Welcome, ${session.name}!</h1>
        ${sessionInfoHtml()}
        <p><a href="/protected">Go to protected route</a></p>
        <p><a href="/logout">Logout</a></p>
      `);
    } else {
      sendResponse(res, 200, `
        <h1>Login</h1>
        ${sessionInfoHtml()}
        <form method="POST" action="/login">
          <label>Username: <input name="username" /></label><br/>
          <label>Password: <input type="password" name="password" /></label><br/>
          <button>Login</button>
        </form>
      `);
    }
  } else if (req.url === '/login' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      console.log('Receiving POST data chunk:', chunk.toString());
    });
    req.on('end', () => {
      console.log('Complete POST body:', body);

      const params = new URLSearchParams(body);
      const username = params.get('username');
      const password = params.get('password');

      console.log(`Attempted login with username: "${username}", password: "${password}"`);

      if (USERS[username] && USERS[username].password === password) {
        // On login, always create new session (session fixation protection)
        const newSessionId = randomUUID();
        sessionStore[newSessionId] = {
          username,
          name: USERS[username].name,
          createdAt: Date.now(),
        };
        console.log('Login success! Created new session:', newSessionId);
        console.log('Current session store:', sessionStore);

        setCookie(res, 'sessionId', newSessionId, { httpOnly: true, path: '/' });
        res.writeHead(302, { Location: '/' });
        res.end();
      } else {
        console.log('Login failed!');
        sendResponse(res, 401, '<h1>Login Failed</h1><p><a href="/">Try again</a></p>');
      }
    });
  } else if (req.url === '/logout') {
    if (sessionId) {
      console.log(`Logging out session: ${sessionId}`);
      delete sessionStore[sessionId];
      setCookie(res, 'sessionId', '', { httpOnly: true, path: '/', maxAge: 0 });
    } else {
      console.log('Logout requested but no session found.');
    }
    res.writeHead(302, { Location: '/' });
    res.end();
  } else if (req.url === '/protected') {
    if (session && session.username) {
      sendResponse(res, 200, `
        <h1>Protected Content for ${session.name}</h1>
        ${sessionInfoHtml()}
        <p><a href="/">Home</a></p>
        <p><a href="/logout">Logout</a></p>
      `);
    } else {
      console.log('Unauthorized access attempt to protected route, redirecting to login.');
      res.writeHead(302, { Location: '/' });
      res.end();
    }
  } else {
    sendResponse(res, 404, '<h1>Page Not Found</h1>');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
