const express = require("express");

const router = express.Router();

const { whoAmI } = require("../controllers/controller");

router.get("/whoami", whoAmI);
module.exports = router;
