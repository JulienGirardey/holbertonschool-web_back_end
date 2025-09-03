const http = require('node:http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (request, response) => {
  const { url } = request;

  response.writeHead(200, { 'content-Type': 'text/plain' });

  if (url === '/') {
    response.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    const dbName = process.argv[2] || '';

    countStudents(dbName)
      .then((data) => {
        response.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        response.end('Cannot load the database\n');
      });
  } else {
    response.end('Not found\n');
  }
});

app.listen(1245);

module.exports = app;
