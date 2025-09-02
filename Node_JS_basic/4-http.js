const http = require('node:http');

const app = http.createServer((request, response) => {
	const { method, url } = request;

	console.log(`Received ${method} request for: ${url}`);

	response.writeHead(200, { 'content-type': 'text/plain' });

	response.end('Hello Holberton School!\n');
});

app.listen(1245, () => {
	console.log('Server is running at http://localhost:1245/');
});

module.exports = app;