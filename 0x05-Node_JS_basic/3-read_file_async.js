const fs = require('fs');

/**
 * Reads a CSV file asynchronously and prints the number of students and their fields of study
 * @param {string} path - The path to the CSV file
 */
function countStudents(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Cannot load the database');
            return;
        }

        const lines = data.trim().split('\n');
        if (lines.length === 0 || lines[0].split(',').length < 3) throw new Error('Invalid CSV data');

        const students = lines.slice(1);
        const fields = {};

        students.forEach((student) => {
            const [name, age, field] = student.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(name);
        });

        console.log(`Number of students: ${students.length}`);
        for (const field in fields) {
            if (fields.hasOwnProperty(field)) {
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
            }
        }
    });
}

module.exports = countStudents;
