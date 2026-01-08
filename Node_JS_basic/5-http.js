const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    // Commence la réponse
    res.write('This is the list of our students\n');

    // Sauvegarder console.log
    const originalLog = console.log;
    let capturedOutput = '';

    // Remplace console.log pour capturer
    console.log = (message) => {
      capturedOutput += `${message}\n`;
    };

    // Appel countStudents (qui va faire ses consoles.log)
    countStudents(databasePath)
      .then(() => {
        // Restaure le console.log original
        console.log = originalLog;

        // On envoie ce qu'on a capturer au client HTTP
        res.write(capturedOutput);
        res.end();
      })
      .catch(() => {
        // Restaure console.log en cas d'erreur aussi
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
