import { promises as fs } from 'fs';

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1);

    const fields = {};
    students.forEach((line) => {
      const parts = line.split(',');
      const firstName = parts[0].trim();
      const field = parts[parts.length - 1].trim();
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
