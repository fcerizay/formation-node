require('dotenv').config();

const Promise = require('bluebird');
const sqlite3 = require('sqlite3').verbose();

const dbpath = process.cwd() + process.env.DBPATH;

module.exports = class DB {

    static instance = null;

    constructor() {
        try {
            this.instance = new sqlite3.Database(dbpath);
        } catch (err) {
            console.log(err);
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new this;
        }
        return this.instance;
    }

    run(query) {
        return new Promise((resolve, reject) => {
            this.instance.run(query, (error) => {
                if (error) {
                    reject(error);
                }
                resolve(true);
            });
        });
    }

    all(query, params = []) {
        return new Promise((resolve, reject) => {
            this.instance.all(query, params, (error, data) => {
                if (error) {
                    reject(error);
                }
                resolve(data);
            });
        });
    }
}