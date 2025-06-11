const Job = require('../models/Job');

exports.getAllJobs = (req, res) => {
    Job.getAll((err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des jobs :", err);
            res.status(500).json({ error: "Erreur serveur" });
        } else {
            res.json(result);
        }
    });
};
