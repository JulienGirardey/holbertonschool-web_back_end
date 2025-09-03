const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbName = process.argv[2] || '';
  let logs = '';

  // Capture console.log
  const originalLog = console.log;
  console.log = (msg) => { logs += `${msg}\n`; };

  try {
    await countStudents(dbName);
    console.log = originalLog;
    res.send(`This is the list of our students\n${logs.trim()}`);
  } catch {
    console.log = originalLog;
    res.send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
