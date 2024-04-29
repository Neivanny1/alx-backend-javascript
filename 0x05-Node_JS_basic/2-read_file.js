// A function named countStudents
// The script should attempt
// to read the database file synchronously
// If the database is not available, it should print an error message and exit
const fs = require('fs');

module.exports = function countStudents (path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    const header = lines[0].split(',');
    const idxFn = header.indexOf('firstname');
    const idxFd = header.indexOf('field');
    const fields = {};
    const students = {};

    lines.slice(1).forEach(line => {
      const list = line.split(',');
      if (list.length >= 2) {
        const field = list[idxFd];
        const firstName = list[idxFn];

        if (!fields[field]) fields[field] = 0;
        fields[field]++;

        if (!students[field]) students[field] = [];
        students[field].push(firstName);
      }
    });

    console.log(`Number of students: ${lines.length - 1}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    console.error('Cannot load the database');
    process.exit(1);
  }
};
