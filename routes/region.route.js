const express = require('express');
const regionController = require('../controllers/region.controller.js');
const router = express.Router();

// Get current question for the region
router.get('/:regionId/current-question', regionController.getCurrentQuestion);


module.exports = router;
