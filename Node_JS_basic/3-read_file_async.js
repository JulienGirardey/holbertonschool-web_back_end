const { readFile } = require('fs');

async function countStudents(path) {
  try {
    const data = await readFile(path, 'utf8');
    return data;
  } catch (err) {

  }
}

module.exports = countStudents;