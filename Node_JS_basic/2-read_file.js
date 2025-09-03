const fs = require('fs');

function countStudents(path) {
  try {
    const db = fs.readFileSync(path, 'utf8');
    const lines = db.split('\n').filter(line => line.trim() !== '');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const cs = students.filter(line => line.split(',')[3] === 'CS');
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.map(line => line.split(',')[0]).join(', ')}`);

    const swe = students.filter(line => line.split(',')[3] === 'SWE');
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map(line => line.split(',')[0]).join(', ')}`);

  } catch {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
