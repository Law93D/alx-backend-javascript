const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const databasePath = process.argv[2];

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
        const students = lines.slice(1);
        const fields = {};

        students.forEach((student) => {
            const [name, age, field] = student.split(',');
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(name);
        });

        let output = `Number of students: ${students.length}\n`;
        for (const field in fields) {
            if (fields.hasOwnProperty(field)) {
                output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
            }
        }

        res.send(output);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
