const User = require("../models/userModels")

exports.getUsers = (req, res) => {
    User.findAllUsers((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results)
    })
}
