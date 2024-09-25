const express = require('express');
const router = express.Router();
const cycleController = require('../controllers/cycle.controller');

// Route to add a new cycle
router.post('/', cycleController.addCycle);

// Route to update the cycle span
router.put('/:cycleId', cycleController.updateCycleSpan);

// Route to update the question assigned to a cycle
router.put('/:cycleId/question', cycleController.updateCycleQuestion);



module.exports = router;
