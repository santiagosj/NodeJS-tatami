const router = require("express").Router();
const { AboutController } = require("../controllers");

router.get('/about', AboutController.index);

module.exports = router;