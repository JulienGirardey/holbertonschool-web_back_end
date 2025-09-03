const countStudents = require('./3-read_file_async');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbName = process.argv[2] || '';
  let Text = 'This is the list of our students\n';

  let logs = '';
  const originalLog = console.log;

  console.log = (msg) => { logs += `${msg}\n`; };

  countStudents(dbName)
    .then(() => {
      console.log = originalLog;

      Text += logs;
      res.send(Text);
    })
    .catch(() => {
      console.log = originalLog;

      Text += 'Cannot load the database';
      res.end(Text);
    });
})

app.listen(1245);

module.exports = app;
