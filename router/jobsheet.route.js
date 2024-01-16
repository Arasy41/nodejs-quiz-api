const jobsheetController = require("../controllers/jobsheet.controller");
const router = require("express").Router();

router.post("/one", jobsheetController.submitOne);
router.post("/many", jobsheetController.submitMany);

module.exports = router;
