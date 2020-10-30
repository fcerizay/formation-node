const Promise = require('bluebird');
const DB = require('../core/database.js');

module.exports = class tasks {

    async save(name) {
        const sql = `INSERT INTO tasks(name) values('${name}')`;
        await DB.getInstance().run(sql);
        return true;
    }

    async read() {
        var list = await DB.getInstance().all(`SELECT * FROM tasks`);
        return list;
    }

    async remove(name) {
        const sql = `DELETE FROM tasks WHERE name='${name}'`;
        await DB.getInstance().run(sql);
        return true;
    }
}