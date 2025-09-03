const http = require('http');

const app = http.createServer((request, response) => {

	response.writeHead(200, { 'content-type': 'text/plain' });

	response.end('Hello Holberton School!\n');
});

app.listen(1245);

module.exports = app;
