const fs = require('fs');

function countStudents(path) {
  try {
    const db = fs.readFileSync(path, 'utf8');
    const lines = db.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((line) => {
      const cols = line.split(',');
      const firstName = cols[0].trim();
      const field = cols[cols.length - 1].trim();
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });

    for (const field in fields) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  } catch {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
