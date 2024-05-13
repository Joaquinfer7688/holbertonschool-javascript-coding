const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    const fields = lines[0].split(',');

    const studentsCount = {};

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      for (let j = 0; j < fields.length; j += 1) {
        const field = fields[j].trim();
        if (!studentsCount[field]) {
          studentsCount[field] = [];
        }
        studentsCount[field].push(values[j].trim());
      }
    }

    for (const field of Object.keys(studentsCount)) {
      const count = studentsCount[field].length;
      const list = studentsCount[field].join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${list}`);
    }

    const totalStudents = lines.length - 1; // Subtract 1 for the header line
    console.log(`Number of students: ${totalStudents}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
