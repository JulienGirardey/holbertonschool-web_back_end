const { readFileSync } = require('fs');

function countStudents(path) {
  try {
    const db = readFileSync(path, 'utf8');
    const lines = db.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach(line => {
      const cols = line.split(',');
      const field = cols[3];
      const firstName = cols[0];
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
