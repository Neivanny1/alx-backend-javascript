// A function named countStudents
// The script should attempt
// to read the database file synchronously
// If the database is not available, it should print an error message and exit
const fs = require('fs');

module.exports = function countStudents (path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const header = lines.shift().split(',');
    const idxFn = header.findIndex((ele) => ele === 'firstname');
    const idxFd = header.findIndex((ele) => ele === 'field');
    const fields = {};
    const students = {};
    lines.forEach((line) => {
      const list = line.split(',');
      if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
      fields[list[idxFd]] += 1;
      if (!students[list[idxFd]]) students[list[idxFd]] = '';
      students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
    });
    console.log(`Number of students: ${lines.length}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
