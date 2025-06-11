const db = require('../config/db');

const Job = {
    getAll: (callback) => {
        const sql = "SELECT * FROM jobs";
        db.query(sql, callback);
    }
};

module.exports = Job;
