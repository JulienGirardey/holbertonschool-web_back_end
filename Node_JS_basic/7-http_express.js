const countStudents = require('./3-read_file_async');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const { url } = req;

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const dbName = process.argv[2] || '';
    let logs = '';
    res.write('This is the list of our students\n');
    const originalLog = console.log;
    console.log = (msg) => { logs += `${msg}\n`; };

    countStudents(dbName)
      .then(() => {
        console.log = originalLog;

        res.write(logs);
        res.send();
      })
      .catch(() => {
        console.log = originalLog;

        res.write('Cannot load the database');
        res.end();
      });
  } else {
    res.send('Hello Holberton School!');
  }
})

app.listen(1245);

module.exports = app;
