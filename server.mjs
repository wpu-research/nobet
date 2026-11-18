import http from 'node:http'; import { readFileSync, existsSync } from 'node:fs';
const html = readFileSync(new URL('./index.html', import.meta.url));
const head = { 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer', 'x-robots-tag': 'noindex' };
http.createServer((req, res) => {
  res.writeHead(200, { ...head, 'content-type': 'text/html; charset=utf-8' }); res.end(req.method === 'HEAD' ? undefined : html);
}).listen(process.env.PORT || 8080, '0.0.0.0');
