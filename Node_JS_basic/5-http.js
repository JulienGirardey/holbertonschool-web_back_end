const http = require('node:http');
const countStudents = require('./3-read_file_async');
const { count } = require('node:console');
const { response } = require('express');

const app = http.createServer(async (request, response) => {
  const { url } = request;

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    response.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const dbName = process.argv[2] || '';
    let logs = '';
    const originalLog = console.log;
    console.log = (msg) => { logs += `${msg}\n`; };

    countStudents(dbName)
      .then(() => {
        console.log = originalLog;

        response.write(logs);
        response.end();
      })
      .catch(() => {
        console.log = originalLog;

        response.write('Cannot load the database');
        response.end();
      });
  } else {
    response.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
