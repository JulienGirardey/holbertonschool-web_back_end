const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.slice(1);
    const validStudents = students.filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    validStudents.map(line => {
      const cols = line.split(',');
      const field = cols[cols.length - 1].trim();
      const firstName = cols[0].trim();
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
