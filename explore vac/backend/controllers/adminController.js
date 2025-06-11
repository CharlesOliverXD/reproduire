const Admins = require("../models/adminModels")

exports.getAdmins = (req, resp) => {
    Admins.findAllAdmins((err, result) => {
        if (err) return resp.status(500).send(err);
        resp.json(result)
    })
}

exports.getAdminByName = (req, res) => {
    const { id } = req.params;
    Admins.findAdminByName(id, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        if (results.length === 0) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json(results[0]);
    });
};
