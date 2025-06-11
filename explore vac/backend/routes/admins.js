const express = require("express");
const router = express.Router();

const { getAdmins, getAdminByName } = require("../controllers/adminController");

router.get('/', getAdmins);
router.get('/:id', getAdminByName);


module.exports = router;