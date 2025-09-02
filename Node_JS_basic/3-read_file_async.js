const { readFile } = require('fs').promises;

async function countStudents(path) {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await readFile(path, 'utf8');
      const lines = db.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1);
    
      let result = `Number of students: ${students.length}\n`;

      const cs = students.filter(line => line.split(',')[3] === 'CS');
      result += `Number of students in CS: ${cs.length}. List: ${cs.map(line => line.split(',')[0]).join(', ')}\n`;
    
      const swe = students.filter(line => line.split(',')[3] === 'SWE');
      result += `Number of students in SWE: ${swe.length}. List: ${swe.map(line => name = line.split(',')[0]).join(', ')}`;

      console.log(result);
      resolve(result);
    } catch {
      reject(new Error("Cannot load the database"));
    }
  });
}

module.exports = countStudents;