const http = require('node:http');
const countStudents = require('./3-read_file_async');
const { count } = require('node:console');

const app = http.createServer(async (request, response) => {
  const { url } = request;

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    response.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const dbName = process.argv[2] || '';
    let logs = '';
    const originalLog = console.log;
    console.log = (msg) => { logs += `${msg}\n`;};

    try {
      await countStudents(dbName);
      console.log = originalLog;
      response.end(`This is the list of our students\n${logs.trim()}`);
    } catch {
      console.log = originalLog;
      response.end(`This is the list of our students\nCannot load the database`);
    }
  } else {
    response.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
