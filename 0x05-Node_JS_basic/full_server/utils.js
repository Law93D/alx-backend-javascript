const fs = require('fs').promises;

/**
 * Reads the database file asynchronously and returns student names by field.
 * @param {string} path - The path to the database file.
 * @returns {Promise<Object>} - A promise that resolves with an object containing fields and student names.
 */
async function readDatabase(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        const lines = data.trim().split('\n');
        const fields = {};

        lines.slice(1).forEach((line) => {
            const [name, , field] = line.split(',');
            if (!fields[field]) fields[field] = [];
            fields[field].push(name);
        });

        return fields;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = readDatabase;
