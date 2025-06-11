const db = require('../config/db');

exports.findAllAdmins = callbacks => {
    db.query("SELECT * FROM admins", callbacks)
}

exports.findAdminByName = (id_admin, callback) => {
    db.query('SELECT * FROM admins WHERE id_admin = ?', [id_admin], callback);
};
