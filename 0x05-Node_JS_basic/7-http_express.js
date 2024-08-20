const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

// Ensure the database path is provided
if (!databasePath) {
  console.error('Database file path is missing');
  process.exit(1);
}

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Cannot load the database');
            return;
        }

        const lines = data.trim().split('\n');
        const students = lines.slice(1); // Skip header line
        const fields = {};

        students.forEach((student) => {
            const [name, field] = student.split(',');
            if (name && field) {
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(name);
            }
        });

        let output = 'This is the list of our students\n';
        for (const field in fields) {
            if (fields.hasOwnProperty(field)) {
                output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            }
        }

        res.send(output.trim()); // Trim to remove any extra newline at the end
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app;
