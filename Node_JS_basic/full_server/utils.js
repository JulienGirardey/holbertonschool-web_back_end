import { promises as fs } from 'fs';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.slice(1);
    const validStudents = students.filter((line) => line.trim() !== '');

    const fields = {};
    validStudents.forEach((line) => {
      const parts = line.split(',');
      const firstName = parts[0].trim();
      const field = parts[3].trim();
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    return fields;
  } catch {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
