const db = require('../config/db');

exports.findAllTechns = callbacks => {
    db.query("SELECT * FROM techniciens", callbacks)
}

