const db = require('../config/db');

// Lire tous les utilisateurs
exports.findAllUsers = callback => {
    db.query('SELECT * FROM users', callback);
};

// Ajouter un utilisateur
exports.createUser = (name, email, callback) => {
    db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], callback);
};
