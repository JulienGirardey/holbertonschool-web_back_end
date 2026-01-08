const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    res.write('This is the list of our students\n');

    const originalLog = console.log;
    let capturedOutput = '';

    console.log = (message) => {
      capturedOutput += `${message}\n`;
    };

    countStudents(databasePath)
      .then(() => {
        console.log = originalLog;

        res.write(capturedOutput);
        res.end();
      })
      .catch(() => {
        console.log = originalLog;

        res.write('Cannot load the database');
        res.end();
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;