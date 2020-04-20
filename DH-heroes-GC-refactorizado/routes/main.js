const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainControllers");
//const mainController = require("../controllers/mainController");
router.get("/", mainController.home);

module.exports = router;
