const DB = require('../core/database.js');

module.exports = class tasks {

    async save(user, message) {
        const sql = `INSERT INTO messages(user,message) values('${user}','${message}')`;
        await DB.getInstance().run(sql);
        return true;
    }

    async read() {
        var list = await DB.getInstance().all(`SELECT * FROM messages`);
        return list;
    }

    async remove(user, message) {
        const sql = `DELETE FROM messages WHERE user='${user}' AND message='${message}'`;
        await DB.getInstance().run(sql);
        return true;
    }
}