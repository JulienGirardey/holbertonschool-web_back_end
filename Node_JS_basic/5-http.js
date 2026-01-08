const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (request, response) => {
  const { url } = request;

  response.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    response.end('Hello Holberton School!');
  } else if (url === '/students') {
    const dbName = process.argv[2] || '';
    let logs = '';
    response.write('This is the list of our students\n');
    const originalLog = console.log;
    const message = (msg) => { logs += `${msg}\n`; };
    console.log = message;

    countStudents(dbName)
      .then(() => {
        console.log = originalLog;

        response.write(logs.trim());
        response.end();
      })
      .catch(() => {
        console.log = originalLog;

        response.write('Cannot load the database');
        response.end();
      });
  } else {
    response.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
