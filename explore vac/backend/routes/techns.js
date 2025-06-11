const express = require("express");
const router = express.Router();

const { getTechns } = require("../controllers/technController");

router.get('/', getTechns);

module.exports = router;