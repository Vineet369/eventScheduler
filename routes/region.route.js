// routes/regionRoutes.js
const express = require('express');
const regionController = require('../controllers/region.controller.js');
const router = express.Router();

// Get current question for the region
router.get('/:regionId/current-question', regionController.getCurrentQuestion);

// Add more routes if needed for CRUD operations

module.exports = router;
