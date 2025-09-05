import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = process.argv[2] || './database.csv';

    readDatabase(dbPath)
      .then((fields) => {
        let output = 'This is the list of our students';

        Object.keys(fields).sort().forEach((field) => {
          const students = fields[field];
          output += `\nNumber of students in ${field}: ${students.length}. List: ${students.join(', ')}`;
        });

        response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2] || './database.csv';

    readDatabase(dbPath)
      .then((fields) => {
        const students = fields[major];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
