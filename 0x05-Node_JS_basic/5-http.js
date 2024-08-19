const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 1245;
const databasePath = process.argv[2];

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        fs.readFile(databasePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Cannot load the database');
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

            res.end(output);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = server;
