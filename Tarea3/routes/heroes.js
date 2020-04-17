const express = require("express");
const router = express.Router();

const heroesController = require("../controllers/heroesController");

router.get("/heroes", heroesController.main);

router.get("/heroes/:id/bio/:ok?", heroesController.heroeCompleto);

module.exports = router;