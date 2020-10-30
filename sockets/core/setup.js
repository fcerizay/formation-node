const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('messages.db', (err) => {
    if (err) return console.error(err);
    console.log(`Database started`);
});

db.run(`CREATE TABLE IF NOT EXISTS messages(user VARCHAR(255),message VARCHAR(255))`, (err) => {
    if (err) return console.error(err);
});

db.close((err) => {
    if (err) return console.error(err);
    console.log(`Database closed`);
});
