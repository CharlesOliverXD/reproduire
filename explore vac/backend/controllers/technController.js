const Techns = require("../models/technModels")

exports.getTechns = (req, resp) => {
    Techns.findAllTechns((err, result) => {
        if (err) return resp.status(500).send(err);
        resp.json(result)
    })
}