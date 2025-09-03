const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Route pour la racine
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  let responseText = 'This is the list of our students\n';

  // Sauvegarde console.log
  const originalLog = console.log;
  let capturedOutput = '';

  // Capture console.log
  console.log = (message) => {
    capturedOutput += `${message}\n`;
  };

  // Appeler countStudents
  countStudents(databasePath)
    .then(() => {
      // Restaurer console.log
      console.log = originalLog;

      // Envoie la réponse complete
      responseText += capturedOutput;
      res.send(responseText);
    })
    .catch(() => {
      console.log = originalLog;
      responseText += 'Cannot load the database';
      res.send(responseText);
    });
});

app.listen(1245);

module.exports = app;
