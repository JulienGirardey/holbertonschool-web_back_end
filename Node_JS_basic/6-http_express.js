const express = require('express');
const http = require('node:http');

const app = http.createServer((request, response) => {
	const { method, url } = request;

	console.log(`Received ${method} request for: ${url}`);

	response.writeHead(200, { 'content-Type': 'text/plain' });

	if (url === '/') {
		response.end('Hello Holberton School!');
	}
});

app.listen(1245, () => {
	console.log('Server is running at http://localhost:1245/');
});